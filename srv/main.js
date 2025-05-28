console.log('Loading bookshop service...')

const cds = require('@sap/cds')

module.exports = cds.service.impl(function () {
    console.log('I am in the anonymous function...')
    this.on('READ', 'Books', (req, ...things) => {
        return [{
            ID: cds.utils.uuid(), 
            title: "The title", 
            author_ID: 2
        }];
    })
})
