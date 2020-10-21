db.producto.aggregate(
    [
        {
             $match: { 
                 _id: ObjectId("5f908d658dc2fdc9f0f97691") 
                } 
        }, { 
            $lookup: { 
                from: 'stock', localField: '_id', foreignField: 'producto', as: 'stock' 
            } 
        }, { 
            $unwind: '$stock' 
        }, { 
            $project: { producto: '$nombre', stock: '$stock.stock' }
         }
    ]
).pretty()
db.producto.aggregate(
    [
        {
            $match: {
                _id: ObjectId("5f9097a45039225edf91542d")
            }
        }, {
            $lookup: {
                from: 'stock', localField: '_id', foreignField: 'producto', as: 'stock'
            }
        }, {
            $unwind: '$stock'
        }, {
            $project: { producto: '$nombre', stock: '$stock.stock' }
        }
    ]
).pretty()
