import React, { Component } from 'react';
import './PendingAccounts.css';
import PendingAccountsListItem from './PendingAccountListItem';

class PendingAccounts extends Component {
    render() {
        let data = [
            {
                uGOFJ8NqHjbZhKAYzSZFRs1dSKD3: {
                    accountType: 'receiving_agency',
                    umbrella: 'RheaQY1WxJT03sTPQICFZ4STpfm1', // uid-key of an umbrella
                    name: 'Seattle Union Gospel Mission',
                    email: 'seauniongospel@test.org',
                    address: {
                        street1: '124 Sesame St.',
                        street2: '',
                        city: 'Seattle',
                        state: 'WA',
                        zipcode: 98115,
                        officeNo: '110A'
                    },
                    timezone: 'America/Los_Angeles', // moment.tz.guess()
                    isVerified: false,
                    isActivated: true,
                    primaryContact: {
                        name: 'Chris Stack',
                        email: 'chrisstack@uniongospel.org',
                        phone: '206-586-9876',
                        position: 'Manager'
                    },
                    secondaryContact: {
                        // could be null
                        name: 'Dave Stack',
                        email: 'davestack@uniongospel.org',
                        phone: '206-586-9876',
                        position: 'Volunteer'
                    },
                    deliveryNotes: 'Park in the lot near the south entrance.',
                    acceptEmergencyPickups: true
                }
            },
            {
                RheaQY1WxJT03sTPQICFZ4STpfm1: {
                    accountType: 'deliverer_group',
                    umbrella: 'RheaQY1WxJT03sTPQICFZ4STpfm1', // uid-key of an umbrella
                    name: 'Phi Sigma Ro',
                    email: 'phisigmaro@uw.edu',
                    address: {
                        street1: '124 Sesame St.',
                        street2: '',
                        city: 'Seattle',
                        state: 'WA',
                        zipcode: 98115
                    },
                    timezone: 'America/Los_Angeles', // moment.tz.guess()
                    isVerified: false,
                    isActivated: true,
                    numVolunteers: 50,
                    primaryContact: {
                        name: 'Andy Duncan',
                        email: 'andyd@uw.edu',
                        phone: '206-487-2859',
                        position: 'President'
                    },
                    notifications: [
                        {
                            type: 'recurring_pickup_request', // Enums.NotificationType
                            content: '-K9HdKlCLjjk_ka82K0s/-L5QoXeC_UrL5tRRED3e' // {daId}/{deliveryRequestId}
                        }
                    ]
                }
            },
            {
                // Donating Agency not an account type
                K9HdKlCLjjk_ka82K0s: {
                    umbrella: 'RheaQY1WxJT03sTPQICFZ4STpfm1', // uid-key of an umbrella
                    name: 'Local Point',
                    address: {
                        street1: '1201 NE Campus Pkwy',
                        street2: '',
                        city: 'Seattle',
                        state: 'WA',
                        zipcode: 98105,
                        officeNo: '220'
                    },
                    timezone: 'America/Los_Angeles', // moment.tz.guess()
                    isVerified: false,
                    isActivated: true,

                    // TODO: pull this primary contact using the key
                    primaryContact: {
                        accountType: 'donating_agency_member',
                        agency: '-K9HdKlCLjjk_ka82K0s', // autogen-key of a donating-agency
                        umbrella: 'RheaQY1WxJT03sTPQICFZ4STpfm1', // same as agency's
                        name: 'Andrea Benson',
                        email: 'bensoa3@uw.edu',
                        phone: '206-543-6975',
                        position: 'Manager'
                        // isAdmin: true
                    },
                    members: [
                        'dhA03LwTp3cibXVUcb3nQqO34wj1', // uid-key of donating-agency-member
                        'fbCm3Yrbi4e12WgpVz3gq25VKea2'
                    ],
                    notifications: [
                        {
                            type: 'recurring_pickup_confirmed', // Enums.NotificationType
                            content: '-K9HdKlCLjjk_ka82K0s/-L5QoXeC_UrL5tRRED3e' // {daId}/{deliveryRequestId}
                        }
                    ]
                }
            }
        ];
        let listItems = data.map((item, index) => {
            return <PendingAccountsListItem data={item} />;
        });

        return (
            <div className="pending-accounts-wrapper">
                <div>
                    <div className="group-label label">Type of Group</div>
                    <div className="agency-label label">Agency Name</div>
                    <div className="contact-label label">Primary Contact</div>
                </div>
                {listItems && listItems.length > 0 ? (
                    <div className="listitems">{listItems}</div>
                ) : (
                    <p className="no-pending-accounts">No Pending Accounts.</p>
                )}
            </div>
        );
    }
}

export default PendingAccounts;
