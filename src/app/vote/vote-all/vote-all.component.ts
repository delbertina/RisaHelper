import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-vote-all',
  templateUrl: './vote-all.component.html',
  styleUrls: ['./vote-all.component.scss']
})
export class VoteAllComponent implements OnInit {

  public buttonList = [
    'https://minecraftservers.org/vote/426251/',
    'https://minecraft-server-list.com/server/391863/vote/',
    'https://minecraft-mp.com/server/154182/vote/',
    'https://topminecraftservers.org/vote/9725',
  ];

  public restrictedCookieList = [
    true, true, true, false,
  ]

  public opened: boolean[] = [true];
  public currentSiteURL: SafeResourceUrl;
  public currentId: number = 0;
  public preLoaded = false;

  constructor(
    private sanitizer: DomSanitizer,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.changeSite(0);
  }

  public get sanitizedButtonList(): SafeResourceUrl[] {
    return this.buttonList.map(button => this.sanitizer.bypassSecurityTrustResourceUrl(button));
  }

  public changeSite(id: number): void {
    // If input is between -1 and lenth
    if (id > -1 && id < this.buttonList.length) {
      this.currentSiteURL = "about:blank";
      this.opened[id] = true;
      this.currentSiteURL = this.sanitizedButtonList[id];
      this.currentId = id;
      if (this.restrictedCookieList[id]) {
        this.askOpenNewTab();
      }
    }
  }

  public isButtonSelected(id: number): string {
    if (id === this.currentId) {
      return 'primary';
    } else if (this.opened[id]) {
      return 'success';
    } else {
      return 'accent';
    }
  }

  public openNewTab(inputId?: number): void {
    window.open(this.buttonList[inputId ? inputId : this.currentId], '_blank');
  }

  public askOpenNewTab(): void {
    const dialogRef = this.dialog.open(VoteCookieInfoDialog);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.openNewTab();
      }
    });
  }
}

@Component({
  selector: 'vote-cookie-info-dialog',
  templateUrl: 'vote-cookie-info-dialog.html',
})
export class VoteCookieInfoDialog {}
