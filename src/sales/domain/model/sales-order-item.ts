import { v4 as uuidv4 } from 'uuid';
export class SalesOrderItem {
    private readonly _productId: string;
    private readonly _quantity: number;
    private readonly _unitPrice: number;
    private _id: string;
    private _salesOrderId: string;
    constructor(productId: string, quantity: number, unitPrice: number, salesOrderId: string) {
        this._productId = productId;
        this._quantity = quantity;
        this._unitPrice = unitPrice;
        this._salesOrderId = salesOrderId;
        this._id = uuidv4();
    }
    get id(): string {
        return this._id;
    }
    calculateItemPrice = (): number => this._quantity * this._unitPrice;

    get productId(): string {
        return this._productId;
    }

    get quantity(): number {
        return this._quantity;
    }

    get unitPrice(): number {
        return this._unitPrice;
    }
}