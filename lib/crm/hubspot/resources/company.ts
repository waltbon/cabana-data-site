import { Client as HubspotClient } from '@hubspot/api-client';
import { SimplePublicObject } from '@hubspot/api-client/lib/codegen/crm/companies';
import { ContactHubspotDto } from './contacts';

class CompanyHubspotDto {
    id?: string;
    domain: string;
    name: string;
}

class CompanyHubspotResultDto extends CompanyHubspotDto {
    hubspotObject: SimplePublicObject;
}

export class CompanyHubspotService {
    constructor(private readonly cli: HubspotClient) {
    }

    async create(dto: CompanyHubspotDto): Promise<CompanyHubspotResultDto> {
       
        const object = await this.cli.crm.companies.basicApi.create({
            properties: {
                ...dto
            },
        });

        dto.id = object.id;

        return {
            ...dto,
            hubspotObject: object,
        };
    }

    async addContact(company: CompanyHubspotDto, contact: ContactHubspotDto): Promise<void> {
        try {
            const object = await this.cli.crm.companies.associationsApi.create(
                parseInt(company.id),
                'contacts',
                parseInt(contact.id),
                [{
                    associationCategory: 'HUBSPOT_DEFINED',
                    associationTypeId: 0
                }],
            );
        } catch (error) {
            console.error(error.body);
        }
    }
}