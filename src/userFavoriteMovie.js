import React, { Component } from 'react'

class UserFavoriteMovie extends Component {
  render() {
    return (<ol>
              {this.props.profiles.map((profile) => ( 
              	<li key={profile.userId}>{this.props.users[profile.userID].name} favorite movie is 	   			
                  {this.props.mohvies[profile.favoriteMovieID].name}
				</li>))}
            </ol>
           )
   }
}
export default UserFavoriteMovie; 