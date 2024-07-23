// src/services/purchase.service.ts

import { FetchPurchaseHistoryDto } from '../dtos/fetchPurchaseHistory.dto';

export class PurchaseService {
  static async getPurchaseHistory(dto: FetchPurchaseHistoryDto): Promise<any[]> {
    // Mock database query - replace with actual DB logic
    const mockPurchases = [
      { id: 1, userId: 'user1', date: '2023-07-01', items: ['item1', 'item2'] },
      { id: 2, userId: 'user1', date: '2023-07-15', items: ['item3'] },
      { id: 3, userId: 'user2', date: '2023-07-20', items: ['item4', 'item5'] },
    ];

    return mockPurchases.filter(purchase => {
      const isUserMatch = purchase.userId === dto.userId;
      const isStartDateMatch = !dto.startDate || new Date(purchase.date) >= new Date(dto.startDate);
      const isEndDateMatch = !dto.endDate || new Date(purchase.date) <= new Date(dto.endDate);

      return isUserMatch && isStartDateMatch && isEndDateMatch;
    });
  }
}
