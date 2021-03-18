// import React, { Component } from 'react';
// import axios from 'axios';

// class CastView extends Component {
//   state = {
//     actors: [],
//   };
//   async componentDidMount() {
//     const responce = await axios.get(
//       `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/credits?api_key=ec0633f4801b6d57348783906eedf2d2&language=en-US&per_page=1`,
//     );

//     this.setState({ actors: responce.data.cast });
//   }

//   render() {
//     return (
//       <>
//         <h1>Состав актеров фильма</h1>
//         {this.state.actors.length > 0 && (
//           <ul>
//             {this.state.actors.map(actor => (
//               <li key={actor.id}>
//                 <p>{actor.name}</p>
//                 {actor.profile_path ? (
//                   <img
//                     src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
//                     alt={actor}
//                   />
//                 ) : null}
//               </li>
//             ))}
//           </ul>
//         )}
//       </>
//     );
//   }
// }

// export default CastView;
