import React from 'react'
import PageHeader from '../template/PageHeader';

export default props => {
    return (
        <div>
            <PageHeader name='Sobre' small='Nós' />

            <h2>Nossa História</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <h2>Missão e Visão</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <h2>Imprensa</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
    )
}