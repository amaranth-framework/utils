/**
 * Amaranth - Aurelia Skeleton (http://github.com/amaranth-framework/aurelia-skeleton/)
 *
 * @link      http://github.com/amaranth-framework/aurelia-skeleton/ for the canonical source repository
 * @copyright Copyright (c) 2007-2017 IT Media Connect (http://itmediaconnect.ro)
 * @license   http://github.com/amaranth-framework/aurelia-skeleton/LICENSE MIT License
 */

// import { excludes, traits } from 'traits-decorator';

import * as Cookies from 'js-cookie';

/**
 * Class used for storing data using differen browser functionalities.
 */
export class Storage {
    /**
     * @type {String}
     */
    static TYPE_COOKIE = 'cookie';
    /**
     * @type {String}
     */
    static TYPE_LOCAL = 'local';
    /**
     * @type {String}
     */
    static TYPE_SESSION = 'session';
    /**
     * @param  {String} type
     */
    constructor(type = Storage.TYPE_LOCAL) {
        this.type = type;
    }
    /**
     * Obtain vaue for a certain key.
     * @param  {String} key
     * @return {any}
     */
    get(key) {
        if (this.type !== Storage.TYPE_COOKIE) {
            try {
                return JSON.parse(window[`${this.type}Storage`].getItem(key) || 'null');
            } catch (e) {
                console.warn( // eslint-disable-line no-use-before-define
                    'Storage#get',
                    `Could not implement (${this.type}) storage. Fallback to cookie.`,
                    e
                );
                throw e;
            }
        }
        return JSON.parse(Cookies.get(key) || 'null');
    }
    /**
     * Remove a key from storage
     * @param  {String} key
     */
    remove(key) {
        if (this.type !== Storage.TYPE_COOKIE) {
            try {
                window[`${this.type}Storage`].removeItem(key);
                return true;
            } catch (e) {
                console.warn( // eslint-disable-line no-use-before-define
                    'Storage#remove',
                    `Could not implement (${this.type}) storage. Fallback to cookie.`,
                    e
                );
            }
        }
        return Cookies.remove(key);
    }
    /**
     * Add a key to storage.
     * @param  {String} key
     * @param  {any}    value
     */
    set(key, value) {
        if (this.type !== Storage.TYPE_COOKIE) {
            try {
                let storage = window[`${this.type}Storage`];
                storage.setItem(key, JSON.stringify(value));
                return true;
            } catch (e) {
                console.warn( // eslint-disable-line no-use-before-define
                    'Storage#set',
                    `Could not implement ${this.type} storage. Fallback to cookie.`,
                    e
                );
            }
        }
        return Cookies.set(key, JSON.stringify(value));
    }
}
