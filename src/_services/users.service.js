
import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/users';

export const service = {

  getAllUsers( callback ){
    let request = axios.get(
      URL
    );
    this.requestNext( request, callback, 'getAllUsers')
  },

  requestNext( req, callback, methodCalled ){
    req.then( response => {
      console.log(methodCalled + ' SERVICE', response);

      if( response.data.errors ) callback( { status: false, errors: response.data.errors } )
      else callback( { status: true, data: response.data } )

    }).catch(error => {
      console.log(' Users Service Error - method: ' + methodCalled, error)
    })
  }
  
};

//import { fromFetch } from 'rxjs/fetch';
//import { switchMap, catchError, map } from 'rxjs/operators';

/* KEEP for RxJS code example

getAllUsers( callback ){
  const users$ = fromFetch(URL).pipe(
    switchMap( response => {
      if (response.ok) {
        // OK return data
        return response.json();
      } else {
        // Server is returning a status requiring the client to try something else.
        return of({ error: true, message: `Error ${response.status}` });
      }
    }),
    catchError(err => {
      // Network or other error, handle appropriately
      console.error(err);
      return of({ error: true, message: err.message })
    })
  );
  users$.subscribe({
    next: results => callback( results ),
    complete: () => console.log('users done loading'),
  })
},
*/