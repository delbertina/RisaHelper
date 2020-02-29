import { Component, OnInit} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-vote-all',
  templateUrl: './vote-all.component.html',
  styleUrls: ['./vote-all.component.css']
})
export class VoteAllComponent implements OnInit {

  buttonList = [
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

  opened: boolean[] = [true];

  currentSiteURL: SafeResourceUrl;
  currentId: number;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.currentSiteURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.buttonList[0]);
    this.currentId = 0;
  }

  changeSite(id: number) {
    // If input is not between 0 and lenth - 1
    if (id < 0 || id > this.buttonList.length - 1) {
      return;
    } else {
      this.opened[id] = true;
      this.currentSiteURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.buttonList[id]);
      this.currentId = id;
    }
  }

  isButtonSelected(id: number) {
    if (id === this.currentId) {
      return 'primary';
    } else if (this.opened[id]) {
      return 'success';
    } else {
      return 'accent';
    }
  }

  openNewTab() {
    window.open(this.buttonList[this.currentId], '_blank');
  }
}
