import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ActivatedRoute} from '@angular/router';
import { AngularFireAuth} from 'angularfire2/auth';

// definition of an interface
interface Post {
  title: string;
  content: string;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers:[AngularFireAuth]
})
export class PostComponent implements OnInit {
  title: string;
  content: string;
  postDoc: AngularFirestoreDocument<Post>;
  singlePost: Observable<Post>;

  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    public afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        console.log('user is logged in');
      } else {
        console.log('user not logged in');
      }
    });
  }

  ngOnInit() {
      this.postDoc = this.afs.doc('posts/' + this.route.snapshot.params['id']);
      this.singlePost = this.postDoc.valueChanges();
  }

  updatePost(id, title, content) {
      this.afs.collection('posts').doc(id).update({
        'title': title,
        'content': content
      }
    );


  }

}
