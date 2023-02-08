## Site Link:

https://hastane.netlify.app/

# What This Project Is About?

This website provides a platform for tracking earthquake victims and their location in hospitals in Turkey. The goal of the website is to help the relatives of the victims to quickly find their loved ones and ensure they are receiving the necessary medical assistance.
Features

    (To-Do) Interactive map displaying the locations of hospitals with earthquake victims
    List of victims with their corresponding datas
    Option to search for a victim based on their name

Contribution

Your contribution is valuable in making this website better and more useful. If you have any suggestions or feedback, please feel free to open an issue or create a pull request.
Technical Stack

    CSS, JavaScript and React for the front-end

## Available Scripts

## Docker

You can run the docker container with the following commands:

```bash
docker build -t frontend .  # build the image (npm install might take some time)
docker run -d -p 80:80 frontend  # run the container
```

Now, you can open the application on [http://localhost/](http://localhost/).

## Standart Scripts (Not Sure If They Work)

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
