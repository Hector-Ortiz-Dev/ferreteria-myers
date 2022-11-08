import React from 'react'
import Container from '../elements/Container'
import TitlePage from '../elements/TitlePage'
import Figura from '../elements/Figura'

import { FaShoppingCart } from 'react-icons/fa';

const Cart = () => {
    return (
        <div style={{position:'relative', overflow:'hidden'}}>
            <TitlePage><h1>Carrito de compras</h1></TitlePage>
            <Container>
                <Container Main>
                <Figura Cart><FaShoppingCart className='icono'/></Figura>
                    <div>
                        <table>
                            <thead>
                            <tr>
                                <th>Productos</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th>
                                <div>
                                    <p>Imagen</p>
                                    <div>
                                    <p>Laptop</p>
                                    </div>
                                </div>
                                </th>
                                <td>
                                <div>
                                    <button>
                                    <i></i>
                                    </button>
                                    <input min="0" name="quantity" value="2" type="number"/>
                                    <button>
                                    <i></i>
                                    </button>
                                </div>
                                </td>
                                <td>
                                <p>$9.99</p>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                <div>
                                    <p>Imagen</p>
                                    <div>
                                    <p>Otra laptop</p>
                                    </div>
                                </div>
                                </th>
                                <td>
                                <div>
                                    <button>
                                    <i></i>
                                    </button>
                                    <input min="0" name="quantity" value="1" type="number"/>
                                    <button>
                                    <i></i>
                                    </button>
                                </div>
                                </td>
                                <td>
                                <p>$13.50</p>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </Container>
            </Container>
        </div>
    );
}
 
export default Cart;