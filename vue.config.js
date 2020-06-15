module.exports={
    outputDir:'dist',
    assetsDir:'assets',
    lintOnSave:false,
    devServer:{
        open:true,
        // host:"localhost",
        // port:'8088',
        https:false,
        hotOnly:false,
        proxy:{
            '/api':{
                target:'https://treeholed.applinzi.com',
                // target:'http://152.136.185.210:8000/api/n3',
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}