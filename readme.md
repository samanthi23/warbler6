# Warbler Solution

## Getting started

1.  In the `warbler-server` folder

    * `npm install`
    * `nodemon` (if installed) or `node index.js`

2.  In the `warbler-client` folder

    * `npm install`
    * `npm start`

# set up git warbler-end-6

in .gitignore /node_modules/

# write a process to sign in or log in a user

``` http POST localhost:8081/api/auth/signup username=new password=new email=new@new.compare```


``` http POST localhost:8081/api/auth/signin username=new password=new email=new@new.compare```

invalid password or email

``` http POST localhost:8081/api/auth/signin username=new password=new1 email=new@new.compare```

valid email

``` http POST localhost:8081/api/auth/signin username=new password=new email=new@new.compare```

