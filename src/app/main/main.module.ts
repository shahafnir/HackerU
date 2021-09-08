import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CoursesComponent } from './courses/courses.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { CompanyAdvantagesComponent } from './company-advantages/company-advantages.component';
import { InformationForCandidtesComponent } from './information-for-candidtes/information-for-candidtes.component';

@NgModule({
  declarations: [
    CoursesComponent,
    CompanyInfoComponent,
    CompanyAdvantagesComponent,
    InformationForCandidtesComponent,
  ],
  imports: [FormsModule],
  exports: [
    CoursesComponent,
    CompanyInfoComponent,
    CompanyAdvantagesComponent,
    InformationForCandidtesComponent,
  ],
})
export class MainModule {}
