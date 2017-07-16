import { connect } from 'react-redux';
import ShelfView from '../../components/ShelfView/ShelfView';
import { fetchMoviesAction } from '../../actions/items';
import { fetchFavoritesAction, addFavoriteAction, deleteFavoriteAction } from '../../actions/favorites';
import { userIsAuthenticated, userAuthenticationSuccess, userLoginFromCache } from '../../actions/users';

const mapStateToProps = (state) => {
  return {
    items: state.items,
    favorites: state.favorites,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading,
    userId: state.userAuthenticationSuccess.user_id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(fetchMoviesAction()),
    fetchFavorites: userId => dispatch(fetchFavoritesAction(userId)),
    addFavorite: (userId, movie) => dispatch(addFavoriteAction(userId, movie)),
    logUserIn: user => dispatch(userLoginFromCache(user)),
    deleteFavorite: (userId, movie) => dispatch(deleteFavoriteAction(userId, movie)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShelfView);
