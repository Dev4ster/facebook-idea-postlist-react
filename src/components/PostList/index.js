import React, { Component } from 'react';
import Post from '../Post'
import './styles.css';
class PostList extends Component{
    state = {
        posts: [
            {
                id:1,
                author:{
                    name: 'Victor Menezes',
                    avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQHn7O0Fj-796w/profile-displayphoto-shrink_200_200/0?e=1587600000&v=beta&t=DgMIo1NCRh5Q93RNLltqzC6H9cY0GYk8K7M5FBs024Q'
                },
                date:'22 Fev 2020',
                content:"Eu sou o Dougras",
                comments: [
                    {
                        id:1,
                        author:{
                            name: 'Dougras',
                            avatar: 'https://images.uncyc.org/pt/thumb/0/07/Dougras.png/150px-Dougras.png'
                        },
                        date: '22 h',
                        content: 'Eu sou o Dougras você não é Dougras!'
                    },
                    {
                        id:2,
                        author:{
                            name: 'Edinaldo Pereira',
                            avatar: 'https://pbs.twimg.com/profile_images/721864282523217920/RH22tbrn_400x400.jpg'
                        },
                        date: '10 h',
                        content: '@Dougras Eu sou Edinaldo. Pereira. e estou grabando mais um vidiu grib !'
                    },
                    {
                        id:3,
                        author:{
                            name: 'Rodrigo Ferraz',
                            avatar: 'https://pbs.twimg.com/profile_images/732077792/eu_lindao_400x400.jpg'
                        },
                        date: '10 m',
                        content: 'Eu sou Rodrigo Ferraz,e Eu mando bem! Eu estaciono o carro, as roda gira, a mulherada diz "é isso aí". '
                    }
                ]
            },
            {
                id:2,
                author:{
                    name: 'Jailson Mendes',
                    avatar: 'https://images.uncyc.org/pt/thumb/3/3a/Paidefamilia.png/250px-Paidefamilia.png'
                },
                date:'22 Fev 2020',
                content:"Alguém sabe onde vende laranjas gostosas em sp?",
                comments: [
                    {
                        id:1,
                        author:{
                            name: 'Paulo Guina',
                            avatar: 'https://pbs.twimg.com/profile_images/1082412802348908549/1bEl8Wz6_400x400.jpg'
                        },
                        date: '1 s',
                        content: 'Eu to vendendo 😏'
                    },
                ]
            },
            {
                id:3,
                author:{
                    name: 'Naruto Uzumaki',
                    avatar: 'https://vignette.wikia.nocookie.net/naruto/images/3/33/Naruto_Uzumaki_%28Parte_I_-_HD%29.png/revision/latest?cb=20160316113315&path-prefix=pt-br'
                },
                date:'22 Fev 2020',
                content:"Exame chunnin alguém?",
                comments: [{
                    id:1,
                    author:{
                        name: 'Sasuke Uchiha',
                        avatar: 'https://vignette.wikia.nocookie.net/naruto/images/e/e7/Sasuke_epi_319.png/revision/latest?cb=20130629210647&path-prefix=pt-br'
                    },
                    date: '10 m',
                    content: 'Como se você fosse passar Naruto 😂😂😂'
                },]
            },
        ]
    }
        render(){
            return(
                <section className="post-list">
                    {this.state.posts.reverse().map(post=>(
                        <Post  key={post.id} post={post}/>
                    ))}
                </section>
            );
        }
}

export default PostList;