import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-vote-all',
  templateUrl: './vote-all.component.html',
  styleUrls: ['./vote-all.component.css']
})
export class VoteAllComponent implements OnInit {

  public buttonList = [
    'https://minecraftservers.org/vote/426251/',
    'https://minecraft-server-list.com/server/391863/vote/',
    'https://topg.org/Minecraft/in-457199',
    'https://minecraft-mp.com/server/154182/vote/',
    'https://www.planetminecraft.com/server/magnarisa/vote/',
    'https://minecraft-server.net/vote/magnarisa/',
    'https://minecraftservers.biz/servers/145864/',
    'https://topminecraftservers.org/vote/9725',
    'https://minecraftlist.org/vote/14561 ',
    'https://serverlist.games/vote/2378',
    'https://mc-servers.com/mcvote/3664/',
    'https://www.minevotes.com/vote/582',
  ];

  public restrictedCookieList = [
    true, true, true, true,
    false, false, false, false,
    false, false, false, false
  ]

  public opened: boolean[] = [true];
  public currentSiteURL: SafeResourceUrl;
  public currentId: number = 0;

  constructor(
    private sanitizer: DomSanitizer,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.changeSite(0);
  }

  public changeSite(id: number): void {
    // If input is between 0 and lenth - 1
    if (id > -1 && id < this.buttonList.length - 1) {
      this.opened[id] = true;
      this.currentSiteURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.buttonList[id]);
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

  public openAllNewTab(): void {
    this.buttonList.forEach((button, index) => {
      this.openNewTab(index);
    });
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
