export interface Icontact {
    username: string;
    email: string;
    phone: string;
}

<ion-content>
    <ion-list>
        <ion-item *ngFor="let contact of contactList">
            <ion-thumbnail slot="start">
                <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678099-profile-filled-32.png">
            </ion-thumbnail>
            <ion-label>
              <h2>{{contact.name}}</h2>
              <p>{{contact.phone}}</p>
              <p>{{contact.email}}</p>
            </ion-label>
            <ion-button fill="outline" slot="end"><ion-icon name="arrow-forward"></ion-icon></ion-button> 
          </ion-item>
      </ion-list>
    </ion-content>