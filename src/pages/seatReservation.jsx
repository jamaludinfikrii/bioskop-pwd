import React, { Component } from 'react'

class SeatRes extends Component {
    state ={seats : 100 , baris : 5 , booked : [[2,4] , [3,5],[1,2],[1,3]] }

    renderSeat = () => {
        var arr = []
        for(var i = 0 ; i< this.state.baris ; i++){
            arr.push([])
            for(var j = 0 ; j < this.state.seats/this.state.baris; j++){
                arr[i].push(true)
            }
        }
       

        for(var i = 0 ; i< this.state.booked.length; i++){
            arr[this.state.booked[i][0]][this.state.booked[i][1]] = false
        }
        console.log(arr)

        var jsx = arr.map((val,index) => {
            return(
                <tr>
                    {
                        val.map((val1,i) => {
                            if(val1 === false){
                                return(
                                    <input type='button' disabled value={i+1} className='mr-2 mt-2 bg-danger'  />
                                ) 
                            }
                            return(
                                <input type='button' value={i+1} className='mr-2 mt-2'  />
                            )
                        })
                    }
                </tr>
            )
        })
        return jsx

    }
    render() {
        return (
            <div className='container mt-5 mb-5'>
                <h1>Order Seat Here</h1>
                <table>
                  {this.renderSeat()}
                </table>
            </div>
        )
    }
}

export default SeatRes



// arr = [[true , true],
//         [true,true]        
// ]

// arr[1][1] = false
