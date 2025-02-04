
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model product
 * 
 */
export type product = $Result.DefaultSelection<Prisma.$productPayload>
/**
 * Model pending
 * 
 */
export type pending = $Result.DefaultSelection<Prisma.$pendingPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.product.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.product`: Exposes CRUD operations for the **product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.productDelegate<ExtArgs>;

  /**
   * `prisma.pending`: Exposes CRUD operations for the **pending** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pendings
    * const pendings = await prisma.pending.findMany()
    * ```
    */
  get pending(): Prisma.pendingDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    product: 'product',
    pending: 'pending'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "product" | "pending"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      product: {
        payload: Prisma.$productPayload<ExtArgs>
        fields: Prisma.productFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          findFirst: {
            args: Prisma.productFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          findMany: {
            args: Prisma.productFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>[]
          }
          create: {
            args: Prisma.productCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          createMany: {
            args: Prisma.productCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>[]
          }
          delete: {
            args: Prisma.productDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          update: {
            args: Prisma.productUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          deleteMany: {
            args: Prisma.productDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.productUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.productGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.productCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      pending: {
        payload: Prisma.$pendingPayload<ExtArgs>
        fields: Prisma.pendingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pendingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pendingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendingPayload>
          }
          findFirst: {
            args: Prisma.pendingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pendingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendingPayload>
          }
          findMany: {
            args: Prisma.pendingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendingPayload>[]
          }
          create: {
            args: Prisma.pendingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendingPayload>
          }
          createMany: {
            args: Prisma.pendingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pendingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendingPayload>[]
          }
          delete: {
            args: Prisma.pendingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendingPayload>
          }
          update: {
            args: Prisma.pendingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendingPayload>
          }
          deleteMany: {
            args: Prisma.pendingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pendingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.pendingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendingPayload>
          }
          aggregate: {
            args: Prisma.PendingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePending>
          }
          groupBy: {
            args: Prisma.pendingGroupByArgs<ExtArgs>
            result: $Utils.Optional<PendingGroupByOutputType>[]
          }
          count: {
            args: Prisma.pendingCountArgs<ExtArgs>
            result: $Utils.Optional<PendingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    pending: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pending?: boolean | ProductCountOutputTypeCountPendingArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountPendingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pendingWhereInput
  }


  /**
   * Count Type PendingCountOutputType
   */

  export type PendingCountOutputType = {
    products: number
  }

  export type PendingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | PendingCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * PendingCountOutputType without action
   */
  export type PendingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingCountOutputType
     */
    select?: PendingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PendingCountOutputType without action
   */
  export type PendingCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productWhereInput
  }


  /**
   * Models
   */

  /**
   * Model product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    stock_barang: number | null
  }

  export type ProductSumAggregateOutputType = {
    stock_barang: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    start: Date | null
    end: Date | null
    name_barang: string | null
    stock_barang: number | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    start: Date | null
    end: Date | null
    name_barang: string | null
    stock_barang: number | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    start: number
    end: number
    name_barang: number
    stock_barang: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    stock_barang?: true
  }

  export type ProductSumAggregateInputType = {
    stock_barang?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    start?: true
    end?: true
    name_barang?: true
    stock_barang?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    start?: true
    end?: true
    name_barang?: true
    stock_barang?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    start?: true
    end?: true
    name_barang?: true
    stock_barang?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product to aggregate.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type productGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productWhereInput
    orderBy?: productOrderByWithAggregationInput | productOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: productScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    start: Date
    end: Date | null
    name_barang: string | null
    stock_barang: number | null
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends productGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type productSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    name_barang?: boolean
    stock_barang?: boolean
    pending?: boolean | product$pendingArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type productSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    name_barang?: boolean
    stock_barang?: boolean
  }, ExtArgs["result"]["product"]>

  export type productSelectScalar = {
    id?: boolean
    start?: boolean
    end?: boolean
    name_barang?: boolean
    stock_barang?: boolean
  }

  export type productInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pending?: boolean | product$pendingArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $productPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product"
    objects: {
      pending: Prisma.$pendingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      start: Date
      end: Date | null
      name_barang: string | null
      stock_barang: number | null
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type productGetPayload<S extends boolean | null | undefined | productDefaultArgs> = $Result.GetResult<Prisma.$productPayload, S>

  type productCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<productFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface productDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product'], meta: { name: 'product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {productFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productFindUniqueArgs>(args: SelectSubset<T, productFindUniqueArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {productFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productFindUniqueOrThrowArgs>(args: SelectSubset<T, productFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productFindFirstArgs>(args?: SelectSubset<T, productFindFirstArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productFindFirstOrThrowArgs>(args?: SelectSubset<T, productFindFirstOrThrowArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productFindManyArgs>(args?: SelectSubset<T, productFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Product.
     * @param {productCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends productCreateArgs>(args: SelectSubset<T, productCreateArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Products.
     * @param {productCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productCreateManyArgs>(args?: SelectSubset<T, productCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {productCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productCreateManyAndReturnArgs>(args?: SelectSubset<T, productCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Product.
     * @param {productDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends productDeleteArgs>(args: SelectSubset<T, productDeleteArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Product.
     * @param {productUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productUpdateArgs>(args: SelectSubset<T, productUpdateArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {productDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productDeleteManyArgs>(args?: SelectSubset<T, productDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productUpdateManyArgs>(args: SelectSubset<T, productUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {productUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends productUpsertArgs>(args: SelectSubset<T, productUpsertArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productCountArgs>(
      args?: Subset<T, productCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productGroupByArgs['orderBy'] }
        : { orderBy?: productGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product model
   */
  readonly fields: productFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pending<T extends product$pendingArgs<ExtArgs> = {}>(args?: Subset<T, product$pendingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pendingPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the product model
   */ 
  interface productFieldRefs {
    readonly id: FieldRef<"product", 'String'>
    readonly start: FieldRef<"product", 'DateTime'>
    readonly end: FieldRef<"product", 'DateTime'>
    readonly name_barang: FieldRef<"product", 'String'>
    readonly stock_barang: FieldRef<"product", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * product findUnique
   */
  export type productFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput
  }

  /**
   * product findUniqueOrThrow
   */
  export type productFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput
  }

  /**
   * product findFirst
   */
  export type productFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product findFirstOrThrow
   */
  export type productFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product findMany
   */
  export type productFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product create
   */
  export type productCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The data needed to create a product.
     */
    data?: XOR<productCreateInput, productUncheckedCreateInput>
  }

  /**
   * product createMany
   */
  export type productCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productCreateManyInput | productCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product createManyAndReturn
   */
  export type productCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many products.
     */
    data: productCreateManyInput | productCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product update
   */
  export type productUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The data needed to update a product.
     */
    data: XOR<productUpdateInput, productUncheckedUpdateInput>
    /**
     * Choose, which product to update.
     */
    where: productWhereUniqueInput
  }

  /**
   * product updateMany
   */
  export type productUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productWhereInput
  }

  /**
   * product upsert
   */
  export type productUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The filter to search for the product to update in case it exists.
     */
    where: productWhereUniqueInput
    /**
     * In case the product found by the `where` argument doesn't exist, create a new product with this data.
     */
    create: XOR<productCreateInput, productUncheckedCreateInput>
    /**
     * In case the product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productUpdateInput, productUncheckedUpdateInput>
  }

  /**
   * product delete
   */
  export type productDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter which product to delete.
     */
    where: productWhereUniqueInput
  }

  /**
   * product deleteMany
   */
  export type productDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productWhereInput
  }

  /**
   * product.pending
   */
  export type product$pendingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pending
     */
    select?: pendingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendingInclude<ExtArgs> | null
    where?: pendingWhereInput
    orderBy?: pendingOrderByWithRelationInput | pendingOrderByWithRelationInput[]
    cursor?: pendingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PendingScalarFieldEnum | PendingScalarFieldEnum[]
  }

  /**
   * product without action
   */
  export type productDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
  }


  /**
   * Model pending
   */

  export type AggregatePending = {
    _count: PendingCountAggregateOutputType | null
    _avg: PendingAvgAggregateOutputType | null
    _sum: PendingSumAggregateOutputType | null
    _min: PendingMinAggregateOutputType | null
    _max: PendingMaxAggregateOutputType | null
  }

  export type PendingAvgAggregateOutputType = {
    stock_barang: number | null
  }

  export type PendingSumAggregateOutputType = {
    stock_barang: number | null
  }

  export type PendingMinAggregateOutputType = {
    id: string | null
    start: Date | null
    end: Date | null
    stock_barang: number | null
    user: string | null
    note: string | null
    status: boolean | null
  }

  export type PendingMaxAggregateOutputType = {
    id: string | null
    start: Date | null
    end: Date | null
    stock_barang: number | null
    user: string | null
    note: string | null
    status: boolean | null
  }

  export type PendingCountAggregateOutputType = {
    id: number
    start: number
    end: number
    stock_barang: number
    user: number
    note: number
    status: number
    _all: number
  }


  export type PendingAvgAggregateInputType = {
    stock_barang?: true
  }

  export type PendingSumAggregateInputType = {
    stock_barang?: true
  }

  export type PendingMinAggregateInputType = {
    id?: true
    start?: true
    end?: true
    stock_barang?: true
    user?: true
    note?: true
    status?: true
  }

  export type PendingMaxAggregateInputType = {
    id?: true
    start?: true
    end?: true
    stock_barang?: true
    user?: true
    note?: true
    status?: true
  }

  export type PendingCountAggregateInputType = {
    id?: true
    start?: true
    end?: true
    stock_barang?: true
    user?: true
    note?: true
    status?: true
    _all?: true
  }

  export type PendingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pending to aggregate.
     */
    where?: pendingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pendings to fetch.
     */
    orderBy?: pendingOrderByWithRelationInput | pendingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pendingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pendings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pendings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pendings
    **/
    _count?: true | PendingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PendingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PendingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PendingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PendingMaxAggregateInputType
  }

  export type GetPendingAggregateType<T extends PendingAggregateArgs> = {
        [P in keyof T & keyof AggregatePending]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePending[P]>
      : GetScalarType<T[P], AggregatePending[P]>
  }




  export type pendingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pendingWhereInput
    orderBy?: pendingOrderByWithAggregationInput | pendingOrderByWithAggregationInput[]
    by: PendingScalarFieldEnum[] | PendingScalarFieldEnum
    having?: pendingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PendingCountAggregateInputType | true
    _avg?: PendingAvgAggregateInputType
    _sum?: PendingSumAggregateInputType
    _min?: PendingMinAggregateInputType
    _max?: PendingMaxAggregateInputType
  }

  export type PendingGroupByOutputType = {
    id: string
    start: Date
    end: Date | null
    stock_barang: number | null
    user: string | null
    note: string | null
    status: boolean
    _count: PendingCountAggregateOutputType | null
    _avg: PendingAvgAggregateOutputType | null
    _sum: PendingSumAggregateOutputType | null
    _min: PendingMinAggregateOutputType | null
    _max: PendingMaxAggregateOutputType | null
  }

  type GetPendingGroupByPayload<T extends pendingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PendingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PendingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PendingGroupByOutputType[P]>
            : GetScalarType<T[P], PendingGroupByOutputType[P]>
        }
      >
    >


  export type pendingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    stock_barang?: boolean
    user?: boolean
    note?: boolean
    status?: boolean
    products?: boolean | pending$productsArgs<ExtArgs>
    _count?: boolean | PendingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pending"]>

  export type pendingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    stock_barang?: boolean
    user?: boolean
    note?: boolean
    status?: boolean
  }, ExtArgs["result"]["pending"]>

  export type pendingSelectScalar = {
    id?: boolean
    start?: boolean
    end?: boolean
    stock_barang?: boolean
    user?: boolean
    note?: boolean
    status?: boolean
  }

  export type pendingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | pending$productsArgs<ExtArgs>
    _count?: boolean | PendingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type pendingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $pendingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pending"
    objects: {
      products: Prisma.$productPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      start: Date
      end: Date | null
      stock_barang: number | null
      user: string | null
      note: string | null
      status: boolean
    }, ExtArgs["result"]["pending"]>
    composites: {}
  }

  type pendingGetPayload<S extends boolean | null | undefined | pendingDefaultArgs> = $Result.GetResult<Prisma.$pendingPayload, S>

  type pendingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<pendingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PendingCountAggregateInputType | true
    }

  export interface pendingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pending'], meta: { name: 'pending' } }
    /**
     * Find zero or one Pending that matches the filter.
     * @param {pendingFindUniqueArgs} args - Arguments to find a Pending
     * @example
     * // Get one Pending
     * const pending = await prisma.pending.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pendingFindUniqueArgs>(args: SelectSubset<T, pendingFindUniqueArgs<ExtArgs>>): Prisma__pendingClient<$Result.GetResult<Prisma.$pendingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Pending that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {pendingFindUniqueOrThrowArgs} args - Arguments to find a Pending
     * @example
     * // Get one Pending
     * const pending = await prisma.pending.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pendingFindUniqueOrThrowArgs>(args: SelectSubset<T, pendingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pendingClient<$Result.GetResult<Prisma.$pendingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Pending that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pendingFindFirstArgs} args - Arguments to find a Pending
     * @example
     * // Get one Pending
     * const pending = await prisma.pending.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pendingFindFirstArgs>(args?: SelectSubset<T, pendingFindFirstArgs<ExtArgs>>): Prisma__pendingClient<$Result.GetResult<Prisma.$pendingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Pending that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pendingFindFirstOrThrowArgs} args - Arguments to find a Pending
     * @example
     * // Get one Pending
     * const pending = await prisma.pending.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pendingFindFirstOrThrowArgs>(args?: SelectSubset<T, pendingFindFirstOrThrowArgs<ExtArgs>>): Prisma__pendingClient<$Result.GetResult<Prisma.$pendingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Pendings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pendingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pendings
     * const pendings = await prisma.pending.findMany()
     * 
     * // Get first 10 Pendings
     * const pendings = await prisma.pending.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pendingWithIdOnly = await prisma.pending.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pendingFindManyArgs>(args?: SelectSubset<T, pendingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pendingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Pending.
     * @param {pendingCreateArgs} args - Arguments to create a Pending.
     * @example
     * // Create one Pending
     * const Pending = await prisma.pending.create({
     *   data: {
     *     // ... data to create a Pending
     *   }
     * })
     * 
     */
    create<T extends pendingCreateArgs>(args: SelectSubset<T, pendingCreateArgs<ExtArgs>>): Prisma__pendingClient<$Result.GetResult<Prisma.$pendingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Pendings.
     * @param {pendingCreateManyArgs} args - Arguments to create many Pendings.
     * @example
     * // Create many Pendings
     * const pending = await prisma.pending.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pendingCreateManyArgs>(args?: SelectSubset<T, pendingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pendings and returns the data saved in the database.
     * @param {pendingCreateManyAndReturnArgs} args - Arguments to create many Pendings.
     * @example
     * // Create many Pendings
     * const pending = await prisma.pending.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pendings and only return the `id`
     * const pendingWithIdOnly = await prisma.pending.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pendingCreateManyAndReturnArgs>(args?: SelectSubset<T, pendingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pendingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Pending.
     * @param {pendingDeleteArgs} args - Arguments to delete one Pending.
     * @example
     * // Delete one Pending
     * const Pending = await prisma.pending.delete({
     *   where: {
     *     // ... filter to delete one Pending
     *   }
     * })
     * 
     */
    delete<T extends pendingDeleteArgs>(args: SelectSubset<T, pendingDeleteArgs<ExtArgs>>): Prisma__pendingClient<$Result.GetResult<Prisma.$pendingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Pending.
     * @param {pendingUpdateArgs} args - Arguments to update one Pending.
     * @example
     * // Update one Pending
     * const pending = await prisma.pending.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pendingUpdateArgs>(args: SelectSubset<T, pendingUpdateArgs<ExtArgs>>): Prisma__pendingClient<$Result.GetResult<Prisma.$pendingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Pendings.
     * @param {pendingDeleteManyArgs} args - Arguments to filter Pendings to delete.
     * @example
     * // Delete a few Pendings
     * const { count } = await prisma.pending.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pendingDeleteManyArgs>(args?: SelectSubset<T, pendingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pendings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pendingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pendings
     * const pending = await prisma.pending.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pendingUpdateManyArgs>(args: SelectSubset<T, pendingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pending.
     * @param {pendingUpsertArgs} args - Arguments to update or create a Pending.
     * @example
     * // Update or create a Pending
     * const pending = await prisma.pending.upsert({
     *   create: {
     *     // ... data to create a Pending
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pending we want to update
     *   }
     * })
     */
    upsert<T extends pendingUpsertArgs>(args: SelectSubset<T, pendingUpsertArgs<ExtArgs>>): Prisma__pendingClient<$Result.GetResult<Prisma.$pendingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Pendings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pendingCountArgs} args - Arguments to filter Pendings to count.
     * @example
     * // Count the number of Pendings
     * const count = await prisma.pending.count({
     *   where: {
     *     // ... the filter for the Pendings we want to count
     *   }
     * })
    **/
    count<T extends pendingCountArgs>(
      args?: Subset<T, pendingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PendingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pending.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PendingAggregateArgs>(args: Subset<T, PendingAggregateArgs>): Prisma.PrismaPromise<GetPendingAggregateType<T>>

    /**
     * Group by Pending.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pendingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pendingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pendingGroupByArgs['orderBy'] }
        : { orderBy?: pendingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pendingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPendingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pending model
   */
  readonly fields: pendingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pending.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pendingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends pending$productsArgs<ExtArgs> = {}>(args?: Subset<T, pending$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the pending model
   */ 
  interface pendingFieldRefs {
    readonly id: FieldRef<"pending", 'String'>
    readonly start: FieldRef<"pending", 'DateTime'>
    readonly end: FieldRef<"pending", 'DateTime'>
    readonly stock_barang: FieldRef<"pending", 'Int'>
    readonly user: FieldRef<"pending", 'String'>
    readonly note: FieldRef<"pending", 'String'>
    readonly status: FieldRef<"pending", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * pending findUnique
   */
  export type pendingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pending
     */
    select?: pendingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendingInclude<ExtArgs> | null
    /**
     * Filter, which pending to fetch.
     */
    where: pendingWhereUniqueInput
  }

  /**
   * pending findUniqueOrThrow
   */
  export type pendingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pending
     */
    select?: pendingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendingInclude<ExtArgs> | null
    /**
     * Filter, which pending to fetch.
     */
    where: pendingWhereUniqueInput
  }

  /**
   * pending findFirst
   */
  export type pendingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pending
     */
    select?: pendingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendingInclude<ExtArgs> | null
    /**
     * Filter, which pending to fetch.
     */
    where?: pendingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pendings to fetch.
     */
    orderBy?: pendingOrderByWithRelationInput | pendingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pendings.
     */
    cursor?: pendingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pendings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pendings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pendings.
     */
    distinct?: PendingScalarFieldEnum | PendingScalarFieldEnum[]
  }

  /**
   * pending findFirstOrThrow
   */
  export type pendingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pending
     */
    select?: pendingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendingInclude<ExtArgs> | null
    /**
     * Filter, which pending to fetch.
     */
    where?: pendingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pendings to fetch.
     */
    orderBy?: pendingOrderByWithRelationInput | pendingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pendings.
     */
    cursor?: pendingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pendings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pendings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pendings.
     */
    distinct?: PendingScalarFieldEnum | PendingScalarFieldEnum[]
  }

  /**
   * pending findMany
   */
  export type pendingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pending
     */
    select?: pendingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendingInclude<ExtArgs> | null
    /**
     * Filter, which pendings to fetch.
     */
    where?: pendingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pendings to fetch.
     */
    orderBy?: pendingOrderByWithRelationInput | pendingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pendings.
     */
    cursor?: pendingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pendings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pendings.
     */
    skip?: number
    distinct?: PendingScalarFieldEnum | PendingScalarFieldEnum[]
  }

  /**
   * pending create
   */
  export type pendingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pending
     */
    select?: pendingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendingInclude<ExtArgs> | null
    /**
     * The data needed to create a pending.
     */
    data?: XOR<pendingCreateInput, pendingUncheckedCreateInput>
  }

  /**
   * pending createMany
   */
  export type pendingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pendings.
     */
    data: pendingCreateManyInput | pendingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pending createManyAndReturn
   */
  export type pendingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pending
     */
    select?: pendingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many pendings.
     */
    data: pendingCreateManyInput | pendingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pending update
   */
  export type pendingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pending
     */
    select?: pendingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendingInclude<ExtArgs> | null
    /**
     * The data needed to update a pending.
     */
    data: XOR<pendingUpdateInput, pendingUncheckedUpdateInput>
    /**
     * Choose, which pending to update.
     */
    where: pendingWhereUniqueInput
  }

  /**
   * pending updateMany
   */
  export type pendingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pendings.
     */
    data: XOR<pendingUpdateManyMutationInput, pendingUncheckedUpdateManyInput>
    /**
     * Filter which pendings to update
     */
    where?: pendingWhereInput
  }

  /**
   * pending upsert
   */
  export type pendingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pending
     */
    select?: pendingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendingInclude<ExtArgs> | null
    /**
     * The filter to search for the pending to update in case it exists.
     */
    where: pendingWhereUniqueInput
    /**
     * In case the pending found by the `where` argument doesn't exist, create a new pending with this data.
     */
    create: XOR<pendingCreateInput, pendingUncheckedCreateInput>
    /**
     * In case the pending was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pendingUpdateInput, pendingUncheckedUpdateInput>
  }

  /**
   * pending delete
   */
  export type pendingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pending
     */
    select?: pendingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendingInclude<ExtArgs> | null
    /**
     * Filter which pending to delete.
     */
    where: pendingWhereUniqueInput
  }

  /**
   * pending deleteMany
   */
  export type pendingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pendings to delete
     */
    where?: pendingWhereInput
  }

  /**
   * pending.products
   */
  export type pending$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    where?: productWhereInput
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    cursor?: productWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * pending without action
   */
  export type pendingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pending
     */
    select?: pendingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendingInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProductScalarFieldEnum: {
    id: 'id',
    start: 'start',
    end: 'end',
    name_barang: 'name_barang',
    stock_barang: 'stock_barang'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const PendingScalarFieldEnum: {
    id: 'id',
    start: 'start',
    end: 'end',
    stock_barang: 'stock_barang',
    user: 'user',
    note: 'note',
    status: 'status'
  };

  export type PendingScalarFieldEnum = (typeof PendingScalarFieldEnum)[keyof typeof PendingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type productWhereInput = {
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    id?: StringFilter<"product"> | string
    start?: DateTimeFilter<"product"> | Date | string
    end?: DateTimeNullableFilter<"product"> | Date | string | null
    name_barang?: StringNullableFilter<"product"> | string | null
    stock_barang?: IntNullableFilter<"product"> | number | null
    pending?: PendingListRelationFilter
  }

  export type productOrderByWithRelationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    name_barang?: SortOrderInput | SortOrder
    stock_barang?: SortOrderInput | SortOrder
    pending?: pendingOrderByRelationAggregateInput
  }

  export type productWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    start?: DateTimeFilter<"product"> | Date | string
    end?: DateTimeNullableFilter<"product"> | Date | string | null
    name_barang?: StringNullableFilter<"product"> | string | null
    stock_barang?: IntNullableFilter<"product"> | number | null
    pending?: PendingListRelationFilter
  }, "id">

  export type productOrderByWithAggregationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    name_barang?: SortOrderInput | SortOrder
    stock_barang?: SortOrderInput | SortOrder
    _count?: productCountOrderByAggregateInput
    _avg?: productAvgOrderByAggregateInput
    _max?: productMaxOrderByAggregateInput
    _min?: productMinOrderByAggregateInput
    _sum?: productSumOrderByAggregateInput
  }

  export type productScalarWhereWithAggregatesInput = {
    AND?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    OR?: productScalarWhereWithAggregatesInput[]
    NOT?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"product"> | string
    start?: DateTimeWithAggregatesFilter<"product"> | Date | string
    end?: DateTimeNullableWithAggregatesFilter<"product"> | Date | string | null
    name_barang?: StringNullableWithAggregatesFilter<"product"> | string | null
    stock_barang?: IntNullableWithAggregatesFilter<"product"> | number | null
  }

  export type pendingWhereInput = {
    AND?: pendingWhereInput | pendingWhereInput[]
    OR?: pendingWhereInput[]
    NOT?: pendingWhereInput | pendingWhereInput[]
    id?: StringFilter<"pending"> | string
    start?: DateTimeFilter<"pending"> | Date | string
    end?: DateTimeNullableFilter<"pending"> | Date | string | null
    stock_barang?: IntNullableFilter<"pending"> | number | null
    user?: StringNullableFilter<"pending"> | string | null
    note?: StringNullableFilter<"pending"> | string | null
    status?: BoolFilter<"pending"> | boolean
    products?: ProductListRelationFilter
  }

  export type pendingOrderByWithRelationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    stock_barang?: SortOrderInput | SortOrder
    user?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    status?: SortOrder
    products?: productOrderByRelationAggregateInput
  }

  export type pendingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: pendingWhereInput | pendingWhereInput[]
    OR?: pendingWhereInput[]
    NOT?: pendingWhereInput | pendingWhereInput[]
    start?: DateTimeFilter<"pending"> | Date | string
    end?: DateTimeNullableFilter<"pending"> | Date | string | null
    stock_barang?: IntNullableFilter<"pending"> | number | null
    user?: StringNullableFilter<"pending"> | string | null
    note?: StringNullableFilter<"pending"> | string | null
    status?: BoolFilter<"pending"> | boolean
    products?: ProductListRelationFilter
  }, "id">

  export type pendingOrderByWithAggregationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    stock_barang?: SortOrderInput | SortOrder
    user?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: pendingCountOrderByAggregateInput
    _avg?: pendingAvgOrderByAggregateInput
    _max?: pendingMaxOrderByAggregateInput
    _min?: pendingMinOrderByAggregateInput
    _sum?: pendingSumOrderByAggregateInput
  }

  export type pendingScalarWhereWithAggregatesInput = {
    AND?: pendingScalarWhereWithAggregatesInput | pendingScalarWhereWithAggregatesInput[]
    OR?: pendingScalarWhereWithAggregatesInput[]
    NOT?: pendingScalarWhereWithAggregatesInput | pendingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"pending"> | string
    start?: DateTimeWithAggregatesFilter<"pending"> | Date | string
    end?: DateTimeNullableWithAggregatesFilter<"pending"> | Date | string | null
    stock_barang?: IntNullableWithAggregatesFilter<"pending"> | number | null
    user?: StringNullableWithAggregatesFilter<"pending"> | string | null
    note?: StringNullableWithAggregatesFilter<"pending"> | string | null
    status?: BoolWithAggregatesFilter<"pending"> | boolean
  }

  export type productCreateInput = {
    id?: string
    start?: Date | string
    end?: Date | string | null
    name_barang?: string | null
    stock_barang?: number | null
    pending?: pendingCreateNestedManyWithoutProductsInput
  }

  export type productUncheckedCreateInput = {
    id?: string
    start?: Date | string
    end?: Date | string | null
    name_barang?: string | null
    stock_barang?: number | null
    pending?: pendingUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name_barang?: NullableStringFieldUpdateOperationsInput | string | null
    stock_barang?: NullableIntFieldUpdateOperationsInput | number | null
    pending?: pendingUpdateManyWithoutProductsNestedInput
  }

  export type productUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name_barang?: NullableStringFieldUpdateOperationsInput | string | null
    stock_barang?: NullableIntFieldUpdateOperationsInput | number | null
    pending?: pendingUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productCreateManyInput = {
    id?: string
    start?: Date | string
    end?: Date | string | null
    name_barang?: string | null
    stock_barang?: number | null
  }

  export type productUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name_barang?: NullableStringFieldUpdateOperationsInput | string | null
    stock_barang?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type productUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name_barang?: NullableStringFieldUpdateOperationsInput | string | null
    stock_barang?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type pendingCreateInput = {
    id?: string
    start?: Date | string
    end?: Date | string | null
    stock_barang?: number | null
    user?: string | null
    note?: string | null
    status?: boolean
    products?: productCreateNestedManyWithoutPendingInput
  }

  export type pendingUncheckedCreateInput = {
    id?: string
    start?: Date | string
    end?: Date | string | null
    stock_barang?: number | null
    user?: string | null
    note?: string | null
    status?: boolean
    products?: productUncheckedCreateNestedManyWithoutPendingInput
  }

  export type pendingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stock_barang?: NullableIntFieldUpdateOperationsInput | number | null
    user?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    products?: productUpdateManyWithoutPendingNestedInput
  }

  export type pendingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stock_barang?: NullableIntFieldUpdateOperationsInput | number | null
    user?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    products?: productUncheckedUpdateManyWithoutPendingNestedInput
  }

  export type pendingCreateManyInput = {
    id?: string
    start?: Date | string
    end?: Date | string | null
    stock_barang?: number | null
    user?: string | null
    note?: string | null
    status?: boolean
  }

  export type pendingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stock_barang?: NullableIntFieldUpdateOperationsInput | number | null
    user?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type pendingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stock_barang?: NullableIntFieldUpdateOperationsInput | number | null
    user?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PendingListRelationFilter = {
    every?: pendingWhereInput
    some?: pendingWhereInput
    none?: pendingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type pendingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productCountOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    name_barang?: SortOrder
    stock_barang?: SortOrder
  }

  export type productAvgOrderByAggregateInput = {
    stock_barang?: SortOrder
  }

  export type productMaxOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    name_barang?: SortOrder
    stock_barang?: SortOrder
  }

  export type productMinOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    name_barang?: SortOrder
    stock_barang?: SortOrder
  }

  export type productSumOrderByAggregateInput = {
    stock_barang?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProductListRelationFilter = {
    every?: productWhereInput
    some?: productWhereInput
    none?: productWhereInput
  }

  export type productOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pendingCountOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    stock_barang?: SortOrder
    user?: SortOrder
    note?: SortOrder
    status?: SortOrder
  }

  export type pendingAvgOrderByAggregateInput = {
    stock_barang?: SortOrder
  }

  export type pendingMaxOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    stock_barang?: SortOrder
    user?: SortOrder
    note?: SortOrder
    status?: SortOrder
  }

  export type pendingMinOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    stock_barang?: SortOrder
    user?: SortOrder
    note?: SortOrder
    status?: SortOrder
  }

  export type pendingSumOrderByAggregateInput = {
    stock_barang?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type pendingCreateNestedManyWithoutProductsInput = {
    create?: XOR<pendingCreateWithoutProductsInput, pendingUncheckedCreateWithoutProductsInput> | pendingCreateWithoutProductsInput[] | pendingUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: pendingCreateOrConnectWithoutProductsInput | pendingCreateOrConnectWithoutProductsInput[]
    connect?: pendingWhereUniqueInput | pendingWhereUniqueInput[]
  }

  export type pendingUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<pendingCreateWithoutProductsInput, pendingUncheckedCreateWithoutProductsInput> | pendingCreateWithoutProductsInput[] | pendingUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: pendingCreateOrConnectWithoutProductsInput | pendingCreateOrConnectWithoutProductsInput[]
    connect?: pendingWhereUniqueInput | pendingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type pendingUpdateManyWithoutProductsNestedInput = {
    create?: XOR<pendingCreateWithoutProductsInput, pendingUncheckedCreateWithoutProductsInput> | pendingCreateWithoutProductsInput[] | pendingUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: pendingCreateOrConnectWithoutProductsInput | pendingCreateOrConnectWithoutProductsInput[]
    upsert?: pendingUpsertWithWhereUniqueWithoutProductsInput | pendingUpsertWithWhereUniqueWithoutProductsInput[]
    set?: pendingWhereUniqueInput | pendingWhereUniqueInput[]
    disconnect?: pendingWhereUniqueInput | pendingWhereUniqueInput[]
    delete?: pendingWhereUniqueInput | pendingWhereUniqueInput[]
    connect?: pendingWhereUniqueInput | pendingWhereUniqueInput[]
    update?: pendingUpdateWithWhereUniqueWithoutProductsInput | pendingUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: pendingUpdateManyWithWhereWithoutProductsInput | pendingUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: pendingScalarWhereInput | pendingScalarWhereInput[]
  }

  export type pendingUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<pendingCreateWithoutProductsInput, pendingUncheckedCreateWithoutProductsInput> | pendingCreateWithoutProductsInput[] | pendingUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: pendingCreateOrConnectWithoutProductsInput | pendingCreateOrConnectWithoutProductsInput[]
    upsert?: pendingUpsertWithWhereUniqueWithoutProductsInput | pendingUpsertWithWhereUniqueWithoutProductsInput[]
    set?: pendingWhereUniqueInput | pendingWhereUniqueInput[]
    disconnect?: pendingWhereUniqueInput | pendingWhereUniqueInput[]
    delete?: pendingWhereUniqueInput | pendingWhereUniqueInput[]
    connect?: pendingWhereUniqueInput | pendingWhereUniqueInput[]
    update?: pendingUpdateWithWhereUniqueWithoutProductsInput | pendingUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: pendingUpdateManyWithWhereWithoutProductsInput | pendingUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: pendingScalarWhereInput | pendingScalarWhereInput[]
  }

  export type productCreateNestedManyWithoutPendingInput = {
    create?: XOR<productCreateWithoutPendingInput, productUncheckedCreateWithoutPendingInput> | productCreateWithoutPendingInput[] | productUncheckedCreateWithoutPendingInput[]
    connectOrCreate?: productCreateOrConnectWithoutPendingInput | productCreateOrConnectWithoutPendingInput[]
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
  }

  export type productUncheckedCreateNestedManyWithoutPendingInput = {
    create?: XOR<productCreateWithoutPendingInput, productUncheckedCreateWithoutPendingInput> | productCreateWithoutPendingInput[] | productUncheckedCreateWithoutPendingInput[]
    connectOrCreate?: productCreateOrConnectWithoutPendingInput | productCreateOrConnectWithoutPendingInput[]
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type productUpdateManyWithoutPendingNestedInput = {
    create?: XOR<productCreateWithoutPendingInput, productUncheckedCreateWithoutPendingInput> | productCreateWithoutPendingInput[] | productUncheckedCreateWithoutPendingInput[]
    connectOrCreate?: productCreateOrConnectWithoutPendingInput | productCreateOrConnectWithoutPendingInput[]
    upsert?: productUpsertWithWhereUniqueWithoutPendingInput | productUpsertWithWhereUniqueWithoutPendingInput[]
    set?: productWhereUniqueInput | productWhereUniqueInput[]
    disconnect?: productWhereUniqueInput | productWhereUniqueInput[]
    delete?: productWhereUniqueInput | productWhereUniqueInput[]
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
    update?: productUpdateWithWhereUniqueWithoutPendingInput | productUpdateWithWhereUniqueWithoutPendingInput[]
    updateMany?: productUpdateManyWithWhereWithoutPendingInput | productUpdateManyWithWhereWithoutPendingInput[]
    deleteMany?: productScalarWhereInput | productScalarWhereInput[]
  }

  export type productUncheckedUpdateManyWithoutPendingNestedInput = {
    create?: XOR<productCreateWithoutPendingInput, productUncheckedCreateWithoutPendingInput> | productCreateWithoutPendingInput[] | productUncheckedCreateWithoutPendingInput[]
    connectOrCreate?: productCreateOrConnectWithoutPendingInput | productCreateOrConnectWithoutPendingInput[]
    upsert?: productUpsertWithWhereUniqueWithoutPendingInput | productUpsertWithWhereUniqueWithoutPendingInput[]
    set?: productWhereUniqueInput | productWhereUniqueInput[]
    disconnect?: productWhereUniqueInput | productWhereUniqueInput[]
    delete?: productWhereUniqueInput | productWhereUniqueInput[]
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
    update?: productUpdateWithWhereUniqueWithoutPendingInput | productUpdateWithWhereUniqueWithoutPendingInput[]
    updateMany?: productUpdateManyWithWhereWithoutPendingInput | productUpdateManyWithWhereWithoutPendingInput[]
    deleteMany?: productScalarWhereInput | productScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type pendingCreateWithoutProductsInput = {
    id?: string
    start?: Date | string
    end?: Date | string | null
    stock_barang?: number | null
    user?: string | null
    note?: string | null
    status?: boolean
  }

  export type pendingUncheckedCreateWithoutProductsInput = {
    id?: string
    start?: Date | string
    end?: Date | string | null
    stock_barang?: number | null
    user?: string | null
    note?: string | null
    status?: boolean
  }

  export type pendingCreateOrConnectWithoutProductsInput = {
    where: pendingWhereUniqueInput
    create: XOR<pendingCreateWithoutProductsInput, pendingUncheckedCreateWithoutProductsInput>
  }

  export type pendingUpsertWithWhereUniqueWithoutProductsInput = {
    where: pendingWhereUniqueInput
    update: XOR<pendingUpdateWithoutProductsInput, pendingUncheckedUpdateWithoutProductsInput>
    create: XOR<pendingCreateWithoutProductsInput, pendingUncheckedCreateWithoutProductsInput>
  }

  export type pendingUpdateWithWhereUniqueWithoutProductsInput = {
    where: pendingWhereUniqueInput
    data: XOR<pendingUpdateWithoutProductsInput, pendingUncheckedUpdateWithoutProductsInput>
  }

  export type pendingUpdateManyWithWhereWithoutProductsInput = {
    where: pendingScalarWhereInput
    data: XOR<pendingUpdateManyMutationInput, pendingUncheckedUpdateManyWithoutProductsInput>
  }

  export type pendingScalarWhereInput = {
    AND?: pendingScalarWhereInput | pendingScalarWhereInput[]
    OR?: pendingScalarWhereInput[]
    NOT?: pendingScalarWhereInput | pendingScalarWhereInput[]
    id?: StringFilter<"pending"> | string
    start?: DateTimeFilter<"pending"> | Date | string
    end?: DateTimeNullableFilter<"pending"> | Date | string | null
    stock_barang?: IntNullableFilter<"pending"> | number | null
    user?: StringNullableFilter<"pending"> | string | null
    note?: StringNullableFilter<"pending"> | string | null
    status?: BoolFilter<"pending"> | boolean
  }

  export type productCreateWithoutPendingInput = {
    id?: string
    start?: Date | string
    end?: Date | string | null
    name_barang?: string | null
    stock_barang?: number | null
  }

  export type productUncheckedCreateWithoutPendingInput = {
    id?: string
    start?: Date | string
    end?: Date | string | null
    name_barang?: string | null
    stock_barang?: number | null
  }

  export type productCreateOrConnectWithoutPendingInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutPendingInput, productUncheckedCreateWithoutPendingInput>
  }

  export type productUpsertWithWhereUniqueWithoutPendingInput = {
    where: productWhereUniqueInput
    update: XOR<productUpdateWithoutPendingInput, productUncheckedUpdateWithoutPendingInput>
    create: XOR<productCreateWithoutPendingInput, productUncheckedCreateWithoutPendingInput>
  }

  export type productUpdateWithWhereUniqueWithoutPendingInput = {
    where: productWhereUniqueInput
    data: XOR<productUpdateWithoutPendingInput, productUncheckedUpdateWithoutPendingInput>
  }

  export type productUpdateManyWithWhereWithoutPendingInput = {
    where: productScalarWhereInput
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyWithoutPendingInput>
  }

  export type productScalarWhereInput = {
    AND?: productScalarWhereInput | productScalarWhereInput[]
    OR?: productScalarWhereInput[]
    NOT?: productScalarWhereInput | productScalarWhereInput[]
    id?: StringFilter<"product"> | string
    start?: DateTimeFilter<"product"> | Date | string
    end?: DateTimeNullableFilter<"product"> | Date | string | null
    name_barang?: StringNullableFilter<"product"> | string | null
    stock_barang?: IntNullableFilter<"product"> | number | null
  }

  export type pendingUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stock_barang?: NullableIntFieldUpdateOperationsInput | number | null
    user?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type pendingUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stock_barang?: NullableIntFieldUpdateOperationsInput | number | null
    user?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type pendingUncheckedUpdateManyWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stock_barang?: NullableIntFieldUpdateOperationsInput | number | null
    user?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type productUpdateWithoutPendingInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name_barang?: NullableStringFieldUpdateOperationsInput | string | null
    stock_barang?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type productUncheckedUpdateWithoutPendingInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name_barang?: NullableStringFieldUpdateOperationsInput | string | null
    stock_barang?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type productUncheckedUpdateManyWithoutPendingInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name_barang?: NullableStringFieldUpdateOperationsInput | string | null
    stock_barang?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PendingCountOutputTypeDefaultArgs instead
     */
    export type PendingCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PendingCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use productDefaultArgs instead
     */
    export type productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = productDefaultArgs<ExtArgs>
    /**
     * @deprecated Use pendingDefaultArgs instead
     */
    export type pendingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = pendingDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}