import React from 'react'
import {Table , TableBody,TableRow,TableCell,TableFooter,TableHead,Paper,Container, Tab} from '@material-ui/core'
import { DeleteForeverRounded , EditAttributesRounded } from '@material-ui/icons'
import { Modal , ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
import Axios from 'axios';


// Material ui ==> Google

class ManageMovie extends React.Component{
    //state
    state = {data : [] , modalOpen : false}

    //lifecycle
    componentDidMount(){
        Axios.get('http://localhost:2000/movies')
        .then((res) => {
            this.setState({data : res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }
    //functions

    RenderSinopsis = (text) => {
        var arr = text.split(' ')
        var newArr = []
        for(var i = 0 ; i < 5 ; i ++){
            newArr.push(arr[i])
        }

        return newArr.join(' ')
    }

    renderDataToJsx = () => {
        var jsx = this.state.data.map((val) => {
            return(
                <TableRow>
                    <TableCell>{val.id}</TableCell>
                    <TableCell>{val.title}</TableCell>
                    <TableCell>{val.sutradara}</TableCell>
                    <TableCell> <img src={val.image} height='50px' /> </TableCell>
                    <TableCell>{val.genre}</TableCell>
                    <TableCell>{val.playingAt.join(',')}</TableCell>
                    <TableCell>{val.duration}</TableCell>
                    <TableCell>{this.RenderSinopsis(val.sinopsis) + '....'}</TableCell>
                    <TableCell> <EditAttributesRounded /> </TableCell>
                    <TableCell> <DeleteForeverRounded /> </TableCell>
                </TableRow>
            )
        })
        return jsx
    }

    closeModal = () => {
        this.setState({modalOpen : false})
    }
    openModal = () => {
        this.setState({modalOpen : true})
    }
    //render
    render(){
        return(
            <Container fixed>
                <h1> Manage Movie Page </h1>
                <input type='button' className='btn btn-success mb-3' value='Add Data' onClick={this.openModal} /> 
                {/* MODAL START */}

                    <Modal isOpen={this.state.modalOpen}>
                        <ModalHeader>
                            Add Movie
                        </ModalHeader>
                        <ModalBody>
                            <input type='text' className='form-control' placeholder='Title' />
                            <input type='text' className='form-control' placeholder='Sutradara' />
                            <input type='text' className='form-control' placeholder='Genre' />
                            <input type='text' className='form-control' placeholder='Image' />
                        </ModalBody>
                        <ModalFooter>
                            <input type='button' onClick={this.closeModal} value='cancel' className='btn btn-danger' />
                            <input type='button' value='Save' className='btn btn-success' />
                        </ModalFooter>
                    </Modal>

                {/* MODAL END */}
                <Paper>
                    <Table>
                        <TableHead>
                            <TableCell>No</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Sutradara</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell>Genre</TableCell>
                            <TableCell>Played At</TableCell>
                            <TableCell>Duration</TableCell>
                            <TableCell>Sinopsis</TableCell>
                            <TableCell>Action</TableCell>
                        </TableHead>
                        <TableBody>
                            {/* <TableRow>
                                <TableCell>1</TableCell>
                                <TableCell>ANNABELLE COMES HOME</TableCell>
                                <TableCell>Gary Dauberman</TableCell>
                                <TableCell> <img src='https://media.21cineplex.com/webcontent/gallery/pictures/156074568118284_452x647.jpg' height='50px' /> </TableCell>
                                <TableCell>Horror</TableCell>
                                <TableCell>{ [9,14,20].join(',') }</TableCell>
                                <TableCell>Duration</TableCell>
                                <TableCell>Sinopsis</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow> */}
                            {this.renderDataToJsx()}
                        </TableBody>

                    </Table>
                </Paper>
            </Container>
        )
    }
}

export default ManageMovie


// export class Komp2 extends React.Component{
//     render(){
//         return(
//             <div>Ini Komp2</div>
//         )
//     }
// }

