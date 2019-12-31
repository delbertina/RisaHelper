import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-vote-all',
  templateUrl: './vote-all.component.html',
  styleUrls: ['./vote-all.component.css']
})
export class VoteAllComponent implements OnInit {

  buttonList = [
    'http://minecraftservers.org/vote/426251',
    'http://minecraft-server-list.com/server/391863/vote/',
    'https://top-minecraft-servers.com/server/magnarisa/',
    'http://topg.org/Minecraft/in-457199',
    'http://minecraft-mp.com/server/154182/vote/',
    'http://www.planetminecraft.com/server/magnarisa/vote/',
    'https://minecraft-server.net/vote/magnarisa/',
    'https://minecraftservers.biz/servers/145864/',
    'https://topminecraftservers.org/server/9725',
    'https://minecraftlist.org/vote/14561 ',
    'https://serverlist.games/vote/2378',
    'https://mc-servers.com/mcvote/3664/',
    'https://www.minevotes.com/vote/582',
    'https://craft-list.net/minecraft-server/MagnaRisa-SMP/vote'
  ]

  currentSiteURL: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  changeSite(id: number) {
    // If input is not between 0 and lenth - 1
    if (id < 0 || id > this.buttonList.length - 1) {
      return;
    } else {
      this.currentSiteURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.buttonList[id]);
    }
  }

}
