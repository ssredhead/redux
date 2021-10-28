// Import createAsyncThunk and createSlice here.
import { createAsyncThunk } from '@reduxjs/toolkit';

// Create loadCommentsForArticleId here.
const loadCommentsForArticleId = createAsyncThunk(
  "comments/loadCommentsForArticleId",
  async(id) => {
    const response = await fetch(`api/articles/${id}/comments`);
    //await because fetch returns a Promise containing the HTTP reponse to the request. .json() is also async.
    const json = await response.json();
    return json;
  }
);

// Create postCommentForArticleId here.
const postCommentForArticleId = createAsyncThunk(
  "comments/postCommentForArticleId",
  //deconstruct the object here so it can be used in the requestBody
  async({articleId, comment}) => {
    const requestBody = JSON.stringify({comment: comment});
    const response = await fetch(`api/articles/${articleId}/comments`,
    {
        method: 'POST',
        body: requestBody
      }
    );
    const json = await response.json();
    return json;
  }
);

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    // Add initial state properties here.
    byArticleId: {},
    isLoadingComment: false, //these two used for async
    failedToLoadComments: false,
    createCommentIsPending: false, //for postComment
    failedToCreateComment: false,
  },
  // Add extraReducers.
  //This uses map notation.
  //Commented out is builder callback notation which is better for typescript
  extraReducers: {
    [loadCommentsForArticleId.pending]: (state, action) => {
      state.isLoadingComment = true;
      state.failedToLoadComments = false;
    },
    [loadCommentsForArticleId.fulfilled]: (state, action) => {
      state.byArticleId[action.payload.articleId] = action.payload.comments;
      state.isLoadingComment = false;
      state.failedToLoadComments = false;
    },
    [loadCommentsForArticleId.rejected]: (state, action) => {
      state.isLoadingComment = false;
      state.failedToLoadComments = true;
    },
    [postCommentForArticleId.pending]: (state, action) => {
      state.createCommentIsPending = true;
      state.failedToCreateComment = false;
    },
    [postCommentForArticleId.fulfilled]: (state, action) => {
      state.byArticleId[action.payload.articleId].push(action.payload.comments);
      state.createCommentIsPending = false;
      state.failedToCreateComment = false;
    },
    [postCommentForArticleId.rejected]: (state, action) => {
      state.createCommentIsPending = false;
      state.failedToCreateComment = true;
    },
  }
  /** builder callback notation
   * extraReducers: (builder) => {
    builder
      .addCase(loadCommentsForArticleId.pending, (state) => {
        state.isLoadingComments = true;
        state.failedToLoadComments = false;
      })
      .addCase(loadCommentsForArticleId.fulfilled, (state, action) => {
        state.isLoadingComments = false;
        state.failedToLoadComments = false;
        state.byArticleId[action.payload.articleId] = action.payload.comments;
      })
      .addCase(loadCommentsForArticleId.rejected, (state) => {
        state.isLoadingComments = false;
        state.failedToLoadComments = true;
        state.byArticleId = {};
      })
   */
});

export const selectComments = (state) => state.comments.byArticleId;
export const isLoadingComments = (state) => state.comments.isLoadingComments;
export const createCommentIsPending = (state) => state.comments.createCommentIsPending;

export default commentsSlice.reducer;
