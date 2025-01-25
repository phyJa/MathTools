function returnMinor(matrix, i, j) {
    
    let matrixOrder = matrix.length
    let minorMatrix = [[]]
    let minorMatrixIndex = 0

    for(let lineCounter = 0; lineCounter <= matrixOrder - 1; lineCounter++) {
        for(let columnCounter = 0; columnCounter <= matrixOrder - 1; columnCounter++) {
            if (i === lineCounter || j === columnCounter)
                continue
            else {
                minorMatrix[minorMatrixIndex].push(matrix[lineCounter][columnCounter])
                if(minorMatrix[minorMatrixIndex].length === matrixOrder - 1) {
                    minorMatrix.push([])
                    minorMatrixIndex++
                }
            }
        }
    }

    minorMatrix.pop()

    return minorMatrix

}

function determinant(m) {

    let matrix = JSON.parse(JSON.stringify(m))
    let matrixOrder = matrix.length

    if(matrixOrder === 1)
        return matrix[0][0]
    else {
        let det = 0
        for (let i = 0; i < matrix[0].length; i++)
            det = det + (-1)**i * matrix[0][i] * determinant(returnMinor(matrix, 0, i))
        return det
    }
}


console.log(determinant(
    [
        [1, 2, 3, 0, 1, 1],
        [0, 4, 5, 2, 9, 0],
        [1, 12, 0, 12, 1, 10],
        [0, -6, 6, 1, 3, 3],
        [0, 2, 0, -1, 1, 2],
        [0, 1232, 3, 20, 1, 3]
    ]
))