import React, { Component } from "react";
import Post from "./../Post";

import "./styles.css";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Júlio Alcantra",
          avatar: "avatar1.png"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            post_id: 1,
            id: 1,
            date: "04 Jun 2019",
            author: {
              name: "Gabriela",
              avatar: "avatar2.png"
            },
            content: "Opa está sim, mande seu CV para https://rocketseat.com/cv"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar: "avatar3.png"
        },
        date: "05 Jun 2019",
        content: `Fala galera, beleza?
        Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.`,
        comments: [
          {
            post_id: 2,
            id: 2,
            author: {
              name: "João Silva",
              avatar: "avatar4.png"
            },
            date: "05 Jun 2019",
            content:
              "Eae Gabriel, tá muito massa mesmo.... eu estou no desafio 02. Estou gostando muito"
          },
          {
            post_id: 2,
            id: 3,
            author: {
              name: "Marcos Gomes",
              avatar: "avatar5.png"
            },
            date: "05 Jun 2019",
            content:
              "Estou iniciando o bootcamp hoje, ansioso para aprender nodeJs. :) #boraCodar"
          }
        ]
      },
      {
        id: 3,
        date: "10 Jun 2019",
        author: {
          name: "David Faria",
          avatar: "avatar6.png"
        },
        content: `Fala Dev!!
          ufa!! acabei o desafio 03 ... foi massa demais, aprendi muitos conceitos e tecnologias novas.
          segue o repositório:  https://github.com/davidfaria/bootcamp-gostack-gympoint
        `,
        comments: [
          {
            post_id: 3,
            id: 4,
            author: {
              name: "Davi Matos",
              avatar: "avatar7.png"
            },
            date: "11 Jun 2019",
            content:
              "Opa eae David jóia!, também consegui finalizar o desafio 03 #boraCodar #tmj"
          },
          {
            post_id: 3,
            id: 5,
            author: {
              name: "Lara Matos",
              avatar: "avatar5.png"
            },
            date: "11 Jun 2019",
            content:
              "Oiii Também consegui... estou iniciando agora os estudos com reactJs!!"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div className="post-list">
        {this.state.posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
