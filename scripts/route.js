function router(app, currentPage) {
    let route;
    // Message d’erreur par défaut
    const messageError = "Vous êtes perdu ? Retournons à l'accueil.Cette URL n'existe pas.";

    switch (currentPage) {
        // Home Page
        case '/index.html':
        case '/FishEye/index.html':
        case '/FishEye/':
            route = app.homePage();
                  break;
        // Photographer Page
        case '/photographer.html':
        case '/FishEye/photographer.html':
            route = app.photographerPage();
            break;
            
        }
        return route;
    }