import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Post } from 'src/app/domain/post';

@Injectable({
  providedIn: 'root'
})
export class PostCreateService {
  private collection_name = "posts";
  private postCollection: AngularFirestoreCollection<Post>;

  constructor(private afs: AngularFirestore) { }

  getPosts(): Observable<any>{
    return this.afs.collection(this.collection_name, ref =>
         ref.where("enabled", "==", true)
      ).valueChanges();
  }

  savePost(post: Post): Promise<void> {
    const refContacts = this.afs.collection(this.collection_name);
    if (post.id == null) {
      post.id = this.afs.createId();
      post.enabled = true;
    }
    
    return refContacts.doc(post.id).set(Object.assign({}, post));
  }

  readPost(id: string): Observable<Post> {
    return this.postCollection.doc<Post>(id).valueChanges().pipe(
      take(1),
      map(post => {
        post.id = id;
        return post;
      })
    );
  }

}

