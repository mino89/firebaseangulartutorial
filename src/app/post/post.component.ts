import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ActivatedRoute} from '@angular/router';

// definition of an interface
interface Post {
  title: string;
  content: string;
}

interface PostId extends Post {
  id: string;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postDoc: AngularFirestoreDocument<Post>;
  singlePost: Observable<Post>;

  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
      this.postDoc = this.afs.doc('posts/' + this.route.snapshot.params['id']);
      this.singlePost = this.postDoc.valueChanges();
  }

}
