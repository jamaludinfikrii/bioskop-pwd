import React, { Component } from 'react'

class SeatRes extends Component {
    state ={
        seats : 100 , 
        baris : 5 , 
        booked : [[2,4],[3,5],[1,2],[1,3]], 
        chosen : [] 
    }
    onSeatClick = (arr) => {
        var chosen = this.state.chosen
        chosen.push(arr)
        this.setState({chosen :chosen })
    }

    renderSeat = () => {
        var arr = []
        // console.log(arr)

        for(var i = 0 ; i< this.state.baris ; i++){
            arr.push([])
            for(var j = 0 ; j < this.state.seats/this.state.baris; j++){
                arr[i].push(1)
            }
        }
        
        for(var i = 0 ; i< this.state.booked.length; i++){
            arr[this.state.booked[i][0]][this.state.booked[i][1]] = 2
        }
        for(var i = 0 ; i< this.state.chosen.length; i++){
            arr[this.state.chosen[i][0]][this.state.chosen[i][1]] = 3
        }
        var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
        var jsx = arr.map((val,index) => {
            return(
                <tr>
                    {
                        val.map((val1,i) => {
                            if(val1 === 2){
                                return(
                                    <input 
                                    type='button' 
                                    style={{width:'40px' , height:'40px' , color : 'white',textAlign:'center'}} 
                                    disabled 
                                    value={i+1 + alpha[index]} 
                                    className='mr-2 mt-2 bg-danger'  />
                                ) 
                            }
                            if(val1 === 3){
                                return(
                                    <input 
                                    type='button' 
                                    style={{width:'40px' , height:'40px' , color : 'white',textAlign:'center'}} 
                                    disabled 
                                    value={i+1 + alpha[index]} 
                                    className='mr-2 mt-2 bg-success'  />
                                )
                            }
                            return(
                                <input 
                                type='button' 
                                style={{width:'40px' , height:'40px',textAlign:'center'}} 
                                value={i+1 + alpha[index]} 
                                className='mr-2 mt-2'
                                onClick={()=>this.onSeatClick([index,i])}
                                />
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
