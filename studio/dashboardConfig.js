export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6146229d5e58cec6aa9c4df7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-b3t185kx',
                  apiId: '5e58a8f5-fe7b-4838-b76f-8399c1b8d4ea'
                },
                {
                  buildHookId: '6146229d0f691d85d938a5b1',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-pqmjk1t4',
                  apiId: 'f55cdccd-81be-4749-896b-4347036ec718'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tsondger/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-pqmjk1t4.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
