import { Client as HubspotClient } from '@hubspot/api-client';

export const generateHubspotCli = (): HubspotClient => new HubspotClient({
    accessToken: process.env['HUBSPOT_API_ACCESS_TOKEN'],
});