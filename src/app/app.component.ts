import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// definition of an interface
interface Post {
  title: string;
  content: string;
}

interface PostId extends Post {
  id: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  content: string;
  postsCol: AngularFirestoreCollection<Post>;
  posts: any;
  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;
  singlePost: Observable<Post>;

  constructor( private afs: AngularFirestore) {}

  ngOnInit() {
    this.postsCol = this.afs.collection('posts');
    this.posts = this.postsCol.snapshotChanges()
      .map( actions => {
        return actions.map( a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return {id , data};
        });
      });
  }

  addPost() {
    const id = this.title.split(' ').join('_');
    this.afs.collection('posts').doc(id).set({
      'title' : this.title,
      'content' : this.content
      }
    );
  }

  getPost(postId) {
    this.postDoc = this.afs.doc('posts/' + postId);
    this.singlePost = this.postDoc.valueChanges();
    console.log(this.post);
  }

  deletePost(postId) {
    this.afs.doc('posts/' + postId).delete();
  }
}
