// Import the page's CSS. Webpack will know what to do with it.
import "../stylesheets/app.css";

// Import libraries we need.
import {  default as Web3 } from 'web3';
import {  default as contract } from 'truffle-contract';

// Import our contract artifacts and turn them into usable abstractions.
import si_artifacts from '../../build/contracts/SI.json'

// Conference is our usable abstraction, which we'll use through the code below.
var SI = contract(si_artifacts);

var accounts, account, speaker;
var sim;

function getBalance(address) {
    return web3.fromWei(web3.eth.getBalance(address).toNumber(), 'ether');
}

window.App = { //where to close
    start: function() {
        var self = this;

        web3.eth.getAccounts(function(err, accs) {
            if (err != null) {
                alert("There was an error fetching your accounts.");
                return;
            }

            if (accs.length == 0) {
                alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
                return;
            }
 accounts = accs;
//$("#tentantAddress").html(getBalance(accounts[0])); //prints balance

$("#tentantAddress").text(web3.eth.accounts[0]); //prints account address
            //console.log(accounts);
                 
            self.initializeConference();
        });
    },

    initializeConference: function() {
        var self = this;
	
        SI.deployed().then(function(instance) {
            sim = instance;
            $("#confAddress").html(sim.address);

            self.checkValues();
        }).catch(function(e) {
            console.log(e);
        });

    },




checkValues: function() {

        SI.deployed().then(function(instance) {
           sim = instance;
	    console.log(sim);	
            sim.tenant.call().then

	( function(tent) { console.log(tent); $("input#tentantAddress").val(tent);  }). //})
	
	catch(function(e) { console.log(e); });
	});
   },

Calculate: function(pr,ti,ra) 
{
        var simp;
        SI.deployed().

	then( function(instance) { simp = instance; simp.calculate(pr,ti,ra,{from: accounts[0],gas:3000000}). //(}

then( function() { console.log(pr); console.log(ti);console.log(ra);console.log( JSON.stringify(SI) ); return simp.Principal.call(); }).
	then( function(Principal) { console.log(Principal);   return simp.Time.call();  }). //console.log(Time); 
	then( function(Time) { console.log(Time); return simp.Rate.call();}).
	then( function(Rate) { console.log(Rate); return simp.Interest.call(); }).
	then( function(Interest) { console.log(Interest);  $("#i").html(Interest.toNumber()); });  }). 
        catch(function(e) { console.log(e); });
    	
//}); //})
}

 




};//loop for main

 



window.addEventListener('load', async () => {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
     if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // Request account access if needed
            await ethereum.enable();
            // Acccounts now exposed
            web3.eth.sendTransaction({/* ... */});
        } catch (error) {
            // User denied account access...
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
        web3.eth.sendTransaction({/* ... */});
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }

    SI.setProvider(web3.currentProvider);
    App.start();

    // Wire up the UI elements



    $("#caluclate").click(function() {
        var pr = $("#p").val();
	var ra = $("#r").val();
	var ti = $("#t").val();
        App.Calculate(pr,ti,ra);
    });

    //$("#trans").click(function() {
    //var val = $("#money").val();
      //  App.departure(val);
//});

});
