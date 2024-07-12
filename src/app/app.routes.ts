import { Routes } from '@angular/router';
import { AdduserComponent } from './user/adduser/adduser.component';
import { ListuserComponent } from './user/listuser/listuser.component';
import { DeleteuserComponent } from './user/deleteuser/deleteuser.component';
import { EdituserComponent } from './user/edituser/edituser.component';
import { ListingComponent } from './user/listing/listing.component';

export const routes: Routes = [
    { path: 'Add', component: AdduserComponent},
    { path: 'List', component: ListuserComponent},
    { path: 'Delete', component: DeleteuserComponent},
    { path: 'Update', component: EdituserComponent},
    { path: 'listing', component: ListingComponent},


];
