ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/hitchhooker/kappasigmamu-poi.git', // Update to point to your repository  
        user: {
            name: 'hitchhooker', // update to use your name
            email: 'tommi@niemi.lol' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)