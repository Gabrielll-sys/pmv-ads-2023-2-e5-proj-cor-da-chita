﻿using cor_da_chita_api.Controllers.Requests;
using cor_da_chita_api.Models;

namespace cor_da_chita_api.Service
{
    public interface IOrderService
    {
        Task<List<OrderDto>> GetAllAsync();
        Task<OrderDto?> GetAsync(string id);
        Task<OrderDto?> CreateAsync(OrderRequest newOrder);
        Task<OrderDto> UpdateAsync(OrderDto updatedOrder);
        Task RemoveAsync(string id);
    }
}