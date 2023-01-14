const routes = (app) => {
    app.route('/signal')

        .get((req, res) =>
            res.send("Get request send successfully")
        )

        .post((req, res) =>
        
            res.send("Post request send sucessfully")
        )

    app.route('/signal/:signaldata')
        .put((req, res) =>
            res.send("Put request send successfully")
        )


        .delete((req, res) =>
            res.send("delete request send succesfully")
        )
}

export default routes;