# API

- `GET`: `/instance/${id}` -> Game Instance Object

- `POST`: `/lock/${id}` -> Lock object & access code
  
  - Reserves an instance for a set amount of time
  
  - Errors if instance is already reserved

- `DELETE`: `/lock/${id}` -> (none)
  
  - Removes the lock from a given instance
  
  - Errors if access code in body is invalid

- `POST` `/submit/${id}` -> (none)
  
  - Submits image, frees lock, and creates user profile
  
  - Errors if there is a lock on the instance and access code is invalid
  
  - Body must contain image, access code, and user profile
  
  - `GET`: `/images/${id}?index=${index}` -> image datas


