/* ************************************************************************
   Copyright: 2008, OETIKER+PARTNER AG
   License: GPL
   Authors: Tobias Oetiker
   $Id: $
* ************************************************************************ */

/**
 * A Tr specific rpc call which works
 */
qx.Class.define('tr.Server', {
    extend : qx.io.remote.Rpc,
    type : "singleton",


    /**
                     * @param local_url {String}    When running the application in file:// mode, where will we find our RPC server.
                     */
    construct : function(local_url) {
        this.base(arguments);

        this.set({
            timeout     : 60000,
            url         : 'tr.cgi',
            serviceName : 'tr'
        });
    },

    members : {
        /**
         * Tell about the BaseUrl we found.
         *
         * @type member
         * @return {var} BaseUrl {Strings}
         */
        getBaseUrl : function() {
            return this.__base_url;
        },


        /**
         * TODOC
         *
         * @type member
         * @param local_url {var} TODOC
         * @return {void} 
         */
        setLocalUrl : function(local_url) {
            if (document.location.host === '') {
                this.setCrossDomain(true);
                this.setUrl(local_url + 'tr.cgi');
            }
        }
    }
});