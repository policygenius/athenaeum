const path = require( 'path' );
const express = require( 'express' );

module.exports = {
  app: () => {
    const app = express()
    const indexPath = path.join( __dirname, 'app/public/index.html' )
    const publicPath = express.static( path.join( __dirname, '/dist' ) )

    app.use( publicPath )
    app.get( '*', ( _, res ) => { res.sendFile( indexPath ) } )

    return app

  }
}
