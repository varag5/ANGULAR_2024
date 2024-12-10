import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ArtistService } from "../artist/artist.service";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrls: ['./form.css']
})
export class FormComponent implements OnInit {
  RemoveArtistForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private artistService: ArtistService
  ) {}

  ngOnInit(): void {
    this.RemoveArtistForm = this.formBuilder.group({
      artistId: ''
    });
  }

  onSubmit(): void {
    const artistId = this.RemoveArtistForm.controls['artistId'].value;
    if (artistId) {
      this.artistService.deleteArtist(artistId).subscribe(
        () => {
          console.log(`Artist with ID ${artistId} deleted.`);
          alert(`Artist with ID ${artistId} deleted successfully.`);
        },
        (error: HttpErrorResponse) => {
          console.error(error.message);
          alert(`Failed to delete artist: ${error.message}`);
        }
      );
    } else {
      alert('Artist ID is required!');
    }
  }
}
