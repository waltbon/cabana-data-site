import { Client as HubspotClient } from '@hubspot/api-client';
import { SimplePublicObject } from '@hubspot/api-client/lib/codegen/crm/contacts';

export class ContactHubspotDto {
    id?: string;
    email: string;
    firstname: string;
    lastname: string;
    phone: string;
    company: string;
}

class ContactHubspotResultDto extends ContactHubspotDto {
    hubspotObject: SimplePublicObject;
}

export class ContactHubspotService {
    constructor(private readonly cli: HubspotClient) {
    }

    async create(dto: ContactHubspotDto): Promise<ContactHubspotResultDto> {
        const {
            firstname,
            lastname,
            email,
            phone,
            company,
        } = dto;
       
        const contact = await this.cli.crm.contacts.basicApi.create({
            properties: {
                firstname,
                lastname,
                email,
                phone,
                company,
            }
        });
        dto.id = contact.id;

        return {
            ...dto,
            hubspotObject: contact,
        };
    }
}