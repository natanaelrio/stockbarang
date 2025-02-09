
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
 * Model gedung
 * 
 */
export type gedung = $Result.DefaultSelection<Prisma.$gedungPayload>
/**
 * Model product
 * 
 */
export type product = $Result.DefaultSelection<Prisma.$productPayload>
/**
 * Model produkGedung
 * 
 */
export type produkGedung = $Result.DefaultSelection<Prisma.$produkGedungPayload>
/**
 * Model pendingProduct
 * 
 */
export type pendingProduct = $Result.DefaultSelection<Prisma.$pendingProductPayload>
/**
 * Model notifUser
 * 
 */
export type notifUser = $Result.DefaultSelection<Prisma.$notifUserPayload>
/**
 * Model logUser
 * 
 */
export type logUser = $Result.DefaultSelection<Prisma.$logUserPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Gedungs
 * const gedungs = await prisma.gedung.findMany()
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
   * // Fetch zero or more Gedungs
   * const gedungs = await prisma.gedung.findMany()
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
   * `prisma.gedung`: Exposes CRUD operations for the **gedung** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gedungs
    * const gedungs = await prisma.gedung.findMany()
    * ```
    */
  get gedung(): Prisma.gedungDelegate<ExtArgs>;

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
   * `prisma.produkGedung`: Exposes CRUD operations for the **produkGedung** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProdukGedungs
    * const produkGedungs = await prisma.produkGedung.findMany()
    * ```
    */
  get produkGedung(): Prisma.produkGedungDelegate<ExtArgs>;

  /**
   * `prisma.pendingProduct`: Exposes CRUD operations for the **pendingProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PendingProducts
    * const pendingProducts = await prisma.pendingProduct.findMany()
    * ```
    */
  get pendingProduct(): Prisma.pendingProductDelegate<ExtArgs>;

  /**
   * `prisma.notifUser`: Exposes CRUD operations for the **notifUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotifUsers
    * const notifUsers = await prisma.notifUser.findMany()
    * ```
    */
  get notifUser(): Prisma.notifUserDelegate<ExtArgs>;

  /**
   * `prisma.logUser`: Exposes CRUD operations for the **logUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LogUsers
    * const logUsers = await prisma.logUser.findMany()
    * ```
    */
  get logUser(): Prisma.logUserDelegate<ExtArgs>;
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
    gedung: 'gedung',
    product: 'product',
    produkGedung: 'produkGedung',
    pendingProduct: 'pendingProduct',
    notifUser: 'notifUser',
    logUser: 'logUser'
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
      modelProps: "gedung" | "product" | "produkGedung" | "pendingProduct" | "notifUser" | "logUser"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      gedung: {
        payload: Prisma.$gedungPayload<ExtArgs>
        fields: Prisma.gedungFieldRefs
        operations: {
          findUnique: {
            args: Prisma.gedungFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gedungPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.gedungFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gedungPayload>
          }
          findFirst: {
            args: Prisma.gedungFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gedungPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.gedungFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gedungPayload>
          }
          findMany: {
            args: Prisma.gedungFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gedungPayload>[]
          }
          create: {
            args: Prisma.gedungCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gedungPayload>
          }
          createMany: {
            args: Prisma.gedungCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.gedungCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gedungPayload>[]
          }
          delete: {
            args: Prisma.gedungDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gedungPayload>
          }
          update: {
            args: Prisma.gedungUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gedungPayload>
          }
          deleteMany: {
            args: Prisma.gedungDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.gedungUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.gedungUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gedungPayload>
          }
          aggregate: {
            args: Prisma.GedungAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGedung>
          }
          groupBy: {
            args: Prisma.gedungGroupByArgs<ExtArgs>
            result: $Utils.Optional<GedungGroupByOutputType>[]
          }
          count: {
            args: Prisma.gedungCountArgs<ExtArgs>
            result: $Utils.Optional<GedungCountAggregateOutputType> | number
          }
        }
      }
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
      produkGedung: {
        payload: Prisma.$produkGedungPayload<ExtArgs>
        fields: Prisma.produkGedungFieldRefs
        operations: {
          findUnique: {
            args: Prisma.produkGedungFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkGedungPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.produkGedungFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkGedungPayload>
          }
          findFirst: {
            args: Prisma.produkGedungFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkGedungPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.produkGedungFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkGedungPayload>
          }
          findMany: {
            args: Prisma.produkGedungFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkGedungPayload>[]
          }
          create: {
            args: Prisma.produkGedungCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkGedungPayload>
          }
          createMany: {
            args: Prisma.produkGedungCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.produkGedungCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkGedungPayload>[]
          }
          delete: {
            args: Prisma.produkGedungDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkGedungPayload>
          }
          update: {
            args: Prisma.produkGedungUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkGedungPayload>
          }
          deleteMany: {
            args: Prisma.produkGedungDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.produkGedungUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.produkGedungUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkGedungPayload>
          }
          aggregate: {
            args: Prisma.ProdukGedungAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProdukGedung>
          }
          groupBy: {
            args: Prisma.produkGedungGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdukGedungGroupByOutputType>[]
          }
          count: {
            args: Prisma.produkGedungCountArgs<ExtArgs>
            result: $Utils.Optional<ProdukGedungCountAggregateOutputType> | number
          }
        }
      }
      pendingProduct: {
        payload: Prisma.$pendingProductPayload<ExtArgs>
        fields: Prisma.pendingProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pendingProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendingProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pendingProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendingProductPayload>
          }
          findFirst: {
            args: Prisma.pendingProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendingProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pendingProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendingProductPayload>
          }
          findMany: {
            args: Prisma.pendingProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendingProductPayload>[]
          }
          create: {
            args: Prisma.pendingProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendingProductPayload>
          }
          createMany: {
            args: Prisma.pendingProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pendingProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendingProductPayload>[]
          }
          delete: {
            args: Prisma.pendingProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendingProductPayload>
          }
          update: {
            args: Prisma.pendingProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendingProductPayload>
          }
          deleteMany: {
            args: Prisma.pendingProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pendingProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.pendingProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendingProductPayload>
          }
          aggregate: {
            args: Prisma.PendingProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePendingProduct>
          }
          groupBy: {
            args: Prisma.pendingProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<PendingProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.pendingProductCountArgs<ExtArgs>
            result: $Utils.Optional<PendingProductCountAggregateOutputType> | number
          }
        }
      }
      notifUser: {
        payload: Prisma.$notifUserPayload<ExtArgs>
        fields: Prisma.notifUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notifUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notifUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notifUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notifUserPayload>
          }
          findFirst: {
            args: Prisma.notifUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notifUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notifUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notifUserPayload>
          }
          findMany: {
            args: Prisma.notifUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notifUserPayload>[]
          }
          create: {
            args: Prisma.notifUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notifUserPayload>
          }
          createMany: {
            args: Prisma.notifUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.notifUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notifUserPayload>[]
          }
          delete: {
            args: Prisma.notifUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notifUserPayload>
          }
          update: {
            args: Prisma.notifUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notifUserPayload>
          }
          deleteMany: {
            args: Prisma.notifUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notifUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.notifUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notifUserPayload>
          }
          aggregate: {
            args: Prisma.NotifUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifUser>
          }
          groupBy: {
            args: Prisma.notifUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotifUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.notifUserCountArgs<ExtArgs>
            result: $Utils.Optional<NotifUserCountAggregateOutputType> | number
          }
        }
      }
      logUser: {
        payload: Prisma.$logUserPayload<ExtArgs>
        fields: Prisma.logUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.logUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.logUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logUserPayload>
          }
          findFirst: {
            args: Prisma.logUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.logUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logUserPayload>
          }
          findMany: {
            args: Prisma.logUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logUserPayload>[]
          }
          create: {
            args: Prisma.logUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logUserPayload>
          }
          createMany: {
            args: Prisma.logUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.logUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logUserPayload>[]
          }
          delete: {
            args: Prisma.logUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logUserPayload>
          }
          update: {
            args: Prisma.logUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logUserPayload>
          }
          deleteMany: {
            args: Prisma.logUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.logUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.logUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logUserPayload>
          }
          aggregate: {
            args: Prisma.LogUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogUser>
          }
          groupBy: {
            args: Prisma.logUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.logUserCountArgs<ExtArgs>
            result: $Utils.Optional<LogUserCountAggregateOutputType> | number
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
   * Count Type GedungCountOutputType
   */

  export type GedungCountOutputType = {
    produk: number
  }

  export type GedungCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produk?: boolean | GedungCountOutputTypeCountProdukArgs
  }

  // Custom InputTypes
  /**
   * GedungCountOutputType without action
   */
  export type GedungCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GedungCountOutputType
     */
    select?: GedungCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GedungCountOutputType without action
   */
  export type GedungCountOutputTypeCountProdukArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produkGedungWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    produkGedung: number
    pendingProduct: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produkGedung?: boolean | ProductCountOutputTypeCountProdukGedungArgs
    pendingProduct?: boolean | ProductCountOutputTypeCountPendingProductArgs
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
  export type ProductCountOutputTypeCountProdukGedungArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produkGedungWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountPendingProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pendingProductWhereInput
  }


  /**
   * Count Type PendingProductCountOutputType
   */

  export type PendingProductCountOutputType = {
    products: number
  }

  export type PendingProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | PendingProductCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * PendingProductCountOutputType without action
   */
  export type PendingProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingProductCountOutputType
     */
    select?: PendingProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PendingProductCountOutputType without action
   */
  export type PendingProductCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productWhereInput
  }


  /**
   * Models
   */

  /**
   * Model gedung
   */

  export type AggregateGedung = {
    _count: GedungCountAggregateOutputType | null
    _avg: GedungAvgAggregateOutputType | null
    _sum: GedungSumAggregateOutputType | null
    _min: GedungMinAggregateOutputType | null
    _max: GedungMaxAggregateOutputType | null
  }

  export type GedungAvgAggregateOutputType = {
    id: number | null
  }

  export type GedungSumAggregateOutputType = {
    id: number | null
  }

  export type GedungMinAggregateOutputType = {
    id: number | null
    start: Date | null
    end: Date | null
    nama: string | null
    alamat: string | null
  }

  export type GedungMaxAggregateOutputType = {
    id: number | null
    start: Date | null
    end: Date | null
    nama: string | null
    alamat: string | null
  }

  export type GedungCountAggregateOutputType = {
    id: number
    start: number
    end: number
    nama: number
    alamat: number
    _all: number
  }


  export type GedungAvgAggregateInputType = {
    id?: true
  }

  export type GedungSumAggregateInputType = {
    id?: true
  }

  export type GedungMinAggregateInputType = {
    id?: true
    start?: true
    end?: true
    nama?: true
    alamat?: true
  }

  export type GedungMaxAggregateInputType = {
    id?: true
    start?: true
    end?: true
    nama?: true
    alamat?: true
  }

  export type GedungCountAggregateInputType = {
    id?: true
    start?: true
    end?: true
    nama?: true
    alamat?: true
    _all?: true
  }

  export type GedungAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gedung to aggregate.
     */
    where?: gedungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gedungs to fetch.
     */
    orderBy?: gedungOrderByWithRelationInput | gedungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: gedungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gedungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gedungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned gedungs
    **/
    _count?: true | GedungCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GedungAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GedungSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GedungMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GedungMaxAggregateInputType
  }

  export type GetGedungAggregateType<T extends GedungAggregateArgs> = {
        [P in keyof T & keyof AggregateGedung]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGedung[P]>
      : GetScalarType<T[P], AggregateGedung[P]>
  }




  export type gedungGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gedungWhereInput
    orderBy?: gedungOrderByWithAggregationInput | gedungOrderByWithAggregationInput[]
    by: GedungScalarFieldEnum[] | GedungScalarFieldEnum
    having?: gedungScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GedungCountAggregateInputType | true
    _avg?: GedungAvgAggregateInputType
    _sum?: GedungSumAggregateInputType
    _min?: GedungMinAggregateInputType
    _max?: GedungMaxAggregateInputType
  }

  export type GedungGroupByOutputType = {
    id: number
    start: Date
    end: Date | null
    nama: string | null
    alamat: string | null
    _count: GedungCountAggregateOutputType | null
    _avg: GedungAvgAggregateOutputType | null
    _sum: GedungSumAggregateOutputType | null
    _min: GedungMinAggregateOutputType | null
    _max: GedungMaxAggregateOutputType | null
  }

  type GetGedungGroupByPayload<T extends gedungGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GedungGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GedungGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GedungGroupByOutputType[P]>
            : GetScalarType<T[P], GedungGroupByOutputType[P]>
        }
      >
    >


  export type gedungSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    nama?: boolean
    alamat?: boolean
    produk?: boolean | gedung$produkArgs<ExtArgs>
    _count?: boolean | GedungCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gedung"]>

  export type gedungSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    nama?: boolean
    alamat?: boolean
  }, ExtArgs["result"]["gedung"]>

  export type gedungSelectScalar = {
    id?: boolean
    start?: boolean
    end?: boolean
    nama?: boolean
    alamat?: boolean
  }

  export type gedungInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produk?: boolean | gedung$produkArgs<ExtArgs>
    _count?: boolean | GedungCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type gedungIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $gedungPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "gedung"
    objects: {
      produk: Prisma.$produkGedungPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      start: Date
      end: Date | null
      nama: string | null
      alamat: string | null
    }, ExtArgs["result"]["gedung"]>
    composites: {}
  }

  type gedungGetPayload<S extends boolean | null | undefined | gedungDefaultArgs> = $Result.GetResult<Prisma.$gedungPayload, S>

  type gedungCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<gedungFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GedungCountAggregateInputType | true
    }

  export interface gedungDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['gedung'], meta: { name: 'gedung' } }
    /**
     * Find zero or one Gedung that matches the filter.
     * @param {gedungFindUniqueArgs} args - Arguments to find a Gedung
     * @example
     * // Get one Gedung
     * const gedung = await prisma.gedung.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends gedungFindUniqueArgs>(args: SelectSubset<T, gedungFindUniqueArgs<ExtArgs>>): Prisma__gedungClient<$Result.GetResult<Prisma.$gedungPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Gedung that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {gedungFindUniqueOrThrowArgs} args - Arguments to find a Gedung
     * @example
     * // Get one Gedung
     * const gedung = await prisma.gedung.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends gedungFindUniqueOrThrowArgs>(args: SelectSubset<T, gedungFindUniqueOrThrowArgs<ExtArgs>>): Prisma__gedungClient<$Result.GetResult<Prisma.$gedungPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Gedung that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gedungFindFirstArgs} args - Arguments to find a Gedung
     * @example
     * // Get one Gedung
     * const gedung = await prisma.gedung.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends gedungFindFirstArgs>(args?: SelectSubset<T, gedungFindFirstArgs<ExtArgs>>): Prisma__gedungClient<$Result.GetResult<Prisma.$gedungPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Gedung that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gedungFindFirstOrThrowArgs} args - Arguments to find a Gedung
     * @example
     * // Get one Gedung
     * const gedung = await prisma.gedung.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends gedungFindFirstOrThrowArgs>(args?: SelectSubset<T, gedungFindFirstOrThrowArgs<ExtArgs>>): Prisma__gedungClient<$Result.GetResult<Prisma.$gedungPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Gedungs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gedungFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gedungs
     * const gedungs = await prisma.gedung.findMany()
     * 
     * // Get first 10 Gedungs
     * const gedungs = await prisma.gedung.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gedungWithIdOnly = await prisma.gedung.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends gedungFindManyArgs>(args?: SelectSubset<T, gedungFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gedungPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Gedung.
     * @param {gedungCreateArgs} args - Arguments to create a Gedung.
     * @example
     * // Create one Gedung
     * const Gedung = await prisma.gedung.create({
     *   data: {
     *     // ... data to create a Gedung
     *   }
     * })
     * 
     */
    create<T extends gedungCreateArgs>(args: SelectSubset<T, gedungCreateArgs<ExtArgs>>): Prisma__gedungClient<$Result.GetResult<Prisma.$gedungPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Gedungs.
     * @param {gedungCreateManyArgs} args - Arguments to create many Gedungs.
     * @example
     * // Create many Gedungs
     * const gedung = await prisma.gedung.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends gedungCreateManyArgs>(args?: SelectSubset<T, gedungCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gedungs and returns the data saved in the database.
     * @param {gedungCreateManyAndReturnArgs} args - Arguments to create many Gedungs.
     * @example
     * // Create many Gedungs
     * const gedung = await prisma.gedung.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gedungs and only return the `id`
     * const gedungWithIdOnly = await prisma.gedung.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends gedungCreateManyAndReturnArgs>(args?: SelectSubset<T, gedungCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gedungPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Gedung.
     * @param {gedungDeleteArgs} args - Arguments to delete one Gedung.
     * @example
     * // Delete one Gedung
     * const Gedung = await prisma.gedung.delete({
     *   where: {
     *     // ... filter to delete one Gedung
     *   }
     * })
     * 
     */
    delete<T extends gedungDeleteArgs>(args: SelectSubset<T, gedungDeleteArgs<ExtArgs>>): Prisma__gedungClient<$Result.GetResult<Prisma.$gedungPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Gedung.
     * @param {gedungUpdateArgs} args - Arguments to update one Gedung.
     * @example
     * // Update one Gedung
     * const gedung = await prisma.gedung.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends gedungUpdateArgs>(args: SelectSubset<T, gedungUpdateArgs<ExtArgs>>): Prisma__gedungClient<$Result.GetResult<Prisma.$gedungPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Gedungs.
     * @param {gedungDeleteManyArgs} args - Arguments to filter Gedungs to delete.
     * @example
     * // Delete a few Gedungs
     * const { count } = await prisma.gedung.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends gedungDeleteManyArgs>(args?: SelectSubset<T, gedungDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gedungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gedungUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gedungs
     * const gedung = await prisma.gedung.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends gedungUpdateManyArgs>(args: SelectSubset<T, gedungUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Gedung.
     * @param {gedungUpsertArgs} args - Arguments to update or create a Gedung.
     * @example
     * // Update or create a Gedung
     * const gedung = await prisma.gedung.upsert({
     *   create: {
     *     // ... data to create a Gedung
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gedung we want to update
     *   }
     * })
     */
    upsert<T extends gedungUpsertArgs>(args: SelectSubset<T, gedungUpsertArgs<ExtArgs>>): Prisma__gedungClient<$Result.GetResult<Prisma.$gedungPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Gedungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gedungCountArgs} args - Arguments to filter Gedungs to count.
     * @example
     * // Count the number of Gedungs
     * const count = await prisma.gedung.count({
     *   where: {
     *     // ... the filter for the Gedungs we want to count
     *   }
     * })
    **/
    count<T extends gedungCountArgs>(
      args?: Subset<T, gedungCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GedungCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gedung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GedungAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GedungAggregateArgs>(args: Subset<T, GedungAggregateArgs>): Prisma.PrismaPromise<GetGedungAggregateType<T>>

    /**
     * Group by Gedung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gedungGroupByArgs} args - Group by arguments.
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
      T extends gedungGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gedungGroupByArgs['orderBy'] }
        : { orderBy?: gedungGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, gedungGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGedungGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the gedung model
   */
  readonly fields: gedungFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for gedung.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__gedungClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produk<T extends gedung$produkArgs<ExtArgs> = {}>(args?: Subset<T, gedung$produkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produkGedungPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the gedung model
   */ 
  interface gedungFieldRefs {
    readonly id: FieldRef<"gedung", 'Int'>
    readonly start: FieldRef<"gedung", 'DateTime'>
    readonly end: FieldRef<"gedung", 'DateTime'>
    readonly nama: FieldRef<"gedung", 'String'>
    readonly alamat: FieldRef<"gedung", 'String'>
  }
    

  // Custom InputTypes
  /**
   * gedung findUnique
   */
  export type gedungFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gedung
     */
    select?: gedungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gedungInclude<ExtArgs> | null
    /**
     * Filter, which gedung to fetch.
     */
    where: gedungWhereUniqueInput
  }

  /**
   * gedung findUniqueOrThrow
   */
  export type gedungFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gedung
     */
    select?: gedungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gedungInclude<ExtArgs> | null
    /**
     * Filter, which gedung to fetch.
     */
    where: gedungWhereUniqueInput
  }

  /**
   * gedung findFirst
   */
  export type gedungFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gedung
     */
    select?: gedungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gedungInclude<ExtArgs> | null
    /**
     * Filter, which gedung to fetch.
     */
    where?: gedungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gedungs to fetch.
     */
    orderBy?: gedungOrderByWithRelationInput | gedungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gedungs.
     */
    cursor?: gedungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gedungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gedungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gedungs.
     */
    distinct?: GedungScalarFieldEnum | GedungScalarFieldEnum[]
  }

  /**
   * gedung findFirstOrThrow
   */
  export type gedungFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gedung
     */
    select?: gedungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gedungInclude<ExtArgs> | null
    /**
     * Filter, which gedung to fetch.
     */
    where?: gedungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gedungs to fetch.
     */
    orderBy?: gedungOrderByWithRelationInput | gedungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gedungs.
     */
    cursor?: gedungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gedungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gedungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gedungs.
     */
    distinct?: GedungScalarFieldEnum | GedungScalarFieldEnum[]
  }

  /**
   * gedung findMany
   */
  export type gedungFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gedung
     */
    select?: gedungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gedungInclude<ExtArgs> | null
    /**
     * Filter, which gedungs to fetch.
     */
    where?: gedungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gedungs to fetch.
     */
    orderBy?: gedungOrderByWithRelationInput | gedungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing gedungs.
     */
    cursor?: gedungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gedungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gedungs.
     */
    skip?: number
    distinct?: GedungScalarFieldEnum | GedungScalarFieldEnum[]
  }

  /**
   * gedung create
   */
  export type gedungCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gedung
     */
    select?: gedungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gedungInclude<ExtArgs> | null
    /**
     * The data needed to create a gedung.
     */
    data?: XOR<gedungCreateInput, gedungUncheckedCreateInput>
  }

  /**
   * gedung createMany
   */
  export type gedungCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many gedungs.
     */
    data: gedungCreateManyInput | gedungCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * gedung createManyAndReturn
   */
  export type gedungCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gedung
     */
    select?: gedungSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many gedungs.
     */
    data: gedungCreateManyInput | gedungCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * gedung update
   */
  export type gedungUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gedung
     */
    select?: gedungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gedungInclude<ExtArgs> | null
    /**
     * The data needed to update a gedung.
     */
    data: XOR<gedungUpdateInput, gedungUncheckedUpdateInput>
    /**
     * Choose, which gedung to update.
     */
    where: gedungWhereUniqueInput
  }

  /**
   * gedung updateMany
   */
  export type gedungUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update gedungs.
     */
    data: XOR<gedungUpdateManyMutationInput, gedungUncheckedUpdateManyInput>
    /**
     * Filter which gedungs to update
     */
    where?: gedungWhereInput
  }

  /**
   * gedung upsert
   */
  export type gedungUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gedung
     */
    select?: gedungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gedungInclude<ExtArgs> | null
    /**
     * The filter to search for the gedung to update in case it exists.
     */
    where: gedungWhereUniqueInput
    /**
     * In case the gedung found by the `where` argument doesn't exist, create a new gedung with this data.
     */
    create: XOR<gedungCreateInput, gedungUncheckedCreateInput>
    /**
     * In case the gedung was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gedungUpdateInput, gedungUncheckedUpdateInput>
  }

  /**
   * gedung delete
   */
  export type gedungDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gedung
     */
    select?: gedungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gedungInclude<ExtArgs> | null
    /**
     * Filter which gedung to delete.
     */
    where: gedungWhereUniqueInput
  }

  /**
   * gedung deleteMany
   */
  export type gedungDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gedungs to delete
     */
    where?: gedungWhereInput
  }

  /**
   * gedung.produk
   */
  export type gedung$produkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produkGedung
     */
    select?: produkGedungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkGedungInclude<ExtArgs> | null
    where?: produkGedungWhereInput
    orderBy?: produkGedungOrderByWithRelationInput | produkGedungOrderByWithRelationInput[]
    cursor?: produkGedungWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdukGedungScalarFieldEnum | ProdukGedungScalarFieldEnum[]
  }

  /**
   * gedung without action
   */
  export type gedungDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gedung
     */
    select?: gedungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gedungInclude<ExtArgs> | null
  }


  /**
   * Model product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    start: Date | null
    end: Date | null
    namaBarang: string | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    start: Date | null
    end: Date | null
    namaBarang: string | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    start: number
    end: number
    namaBarang: number
    _all: number
  }


  export type ProductMinAggregateInputType = {
    id?: true
    start?: true
    end?: true
    namaBarang?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    start?: true
    end?: true
    namaBarang?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    start?: true
    end?: true
    namaBarang?: true
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
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    start: Date
    end: Date | null
    namaBarang: string | null
    _count: ProductCountAggregateOutputType | null
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
    namaBarang?: boolean
    produkGedung?: boolean | product$produkGedungArgs<ExtArgs>
    pendingProduct?: boolean | product$pendingProductArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type productSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    namaBarang?: boolean
  }, ExtArgs["result"]["product"]>

  export type productSelectScalar = {
    id?: boolean
    start?: boolean
    end?: boolean
    namaBarang?: boolean
  }

  export type productInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produkGedung?: boolean | product$produkGedungArgs<ExtArgs>
    pendingProduct?: boolean | product$pendingProductArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $productPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product"
    objects: {
      produkGedung: Prisma.$produkGedungPayload<ExtArgs>[]
      pendingProduct: Prisma.$pendingProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      start: Date
      end: Date | null
      namaBarang: string | null
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
    produkGedung<T extends product$produkGedungArgs<ExtArgs> = {}>(args?: Subset<T, product$produkGedungArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produkGedungPayload<ExtArgs>, T, "findMany"> | Null>
    pendingProduct<T extends product$pendingProductArgs<ExtArgs> = {}>(args?: Subset<T, product$pendingProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pendingProductPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly namaBarang: FieldRef<"product", 'String'>
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
   * product.produkGedung
   */
  export type product$produkGedungArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produkGedung
     */
    select?: produkGedungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkGedungInclude<ExtArgs> | null
    where?: produkGedungWhereInput
    orderBy?: produkGedungOrderByWithRelationInput | produkGedungOrderByWithRelationInput[]
    cursor?: produkGedungWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdukGedungScalarFieldEnum | ProdukGedungScalarFieldEnum[]
  }

  /**
   * product.pendingProduct
   */
  export type product$pendingProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendingProduct
     */
    select?: pendingProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendingProductInclude<ExtArgs> | null
    where?: pendingProductWhereInput
    orderBy?: pendingProductOrderByWithRelationInput | pendingProductOrderByWithRelationInput[]
    cursor?: pendingProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PendingProductScalarFieldEnum | PendingProductScalarFieldEnum[]
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
   * Model produkGedung
   */

  export type AggregateProdukGedung = {
    _count: ProdukGedungCountAggregateOutputType | null
    _avg: ProdukGedungAvgAggregateOutputType | null
    _sum: ProdukGedungSumAggregateOutputType | null
    _min: ProdukGedungMinAggregateOutputType | null
    _max: ProdukGedungMaxAggregateOutputType | null
  }

  export type ProdukGedungAvgAggregateOutputType = {
    gedungId: number | null
    stockBarang: number | null
  }

  export type ProdukGedungSumAggregateOutputType = {
    gedungId: number | null
    stockBarang: number | null
  }

  export type ProdukGedungMinAggregateOutputType = {
    id: string | null
    start: Date | null
    end: Date | null
    produkId: string | null
    gedungId: number | null
    stockBarang: number | null
  }

  export type ProdukGedungMaxAggregateOutputType = {
    id: string | null
    start: Date | null
    end: Date | null
    produkId: string | null
    gedungId: number | null
    stockBarang: number | null
  }

  export type ProdukGedungCountAggregateOutputType = {
    id: number
    start: number
    end: number
    produkId: number
    gedungId: number
    stockBarang: number
    _all: number
  }


  export type ProdukGedungAvgAggregateInputType = {
    gedungId?: true
    stockBarang?: true
  }

  export type ProdukGedungSumAggregateInputType = {
    gedungId?: true
    stockBarang?: true
  }

  export type ProdukGedungMinAggregateInputType = {
    id?: true
    start?: true
    end?: true
    produkId?: true
    gedungId?: true
    stockBarang?: true
  }

  export type ProdukGedungMaxAggregateInputType = {
    id?: true
    start?: true
    end?: true
    produkId?: true
    gedungId?: true
    stockBarang?: true
  }

  export type ProdukGedungCountAggregateInputType = {
    id?: true
    start?: true
    end?: true
    produkId?: true
    gedungId?: true
    stockBarang?: true
    _all?: true
  }

  export type ProdukGedungAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produkGedung to aggregate.
     */
    where?: produkGedungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produkGedungs to fetch.
     */
    orderBy?: produkGedungOrderByWithRelationInput | produkGedungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: produkGedungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produkGedungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produkGedungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned produkGedungs
    **/
    _count?: true | ProdukGedungCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdukGedungAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdukGedungSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdukGedungMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdukGedungMaxAggregateInputType
  }

  export type GetProdukGedungAggregateType<T extends ProdukGedungAggregateArgs> = {
        [P in keyof T & keyof AggregateProdukGedung]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProdukGedung[P]>
      : GetScalarType<T[P], AggregateProdukGedung[P]>
  }




  export type produkGedungGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produkGedungWhereInput
    orderBy?: produkGedungOrderByWithAggregationInput | produkGedungOrderByWithAggregationInput[]
    by: ProdukGedungScalarFieldEnum[] | ProdukGedungScalarFieldEnum
    having?: produkGedungScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdukGedungCountAggregateInputType | true
    _avg?: ProdukGedungAvgAggregateInputType
    _sum?: ProdukGedungSumAggregateInputType
    _min?: ProdukGedungMinAggregateInputType
    _max?: ProdukGedungMaxAggregateInputType
  }

  export type ProdukGedungGroupByOutputType = {
    id: string
    start: Date
    end: Date | null
    produkId: string
    gedungId: number
    stockBarang: number
    _count: ProdukGedungCountAggregateOutputType | null
    _avg: ProdukGedungAvgAggregateOutputType | null
    _sum: ProdukGedungSumAggregateOutputType | null
    _min: ProdukGedungMinAggregateOutputType | null
    _max: ProdukGedungMaxAggregateOutputType | null
  }

  type GetProdukGedungGroupByPayload<T extends produkGedungGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdukGedungGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdukGedungGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdukGedungGroupByOutputType[P]>
            : GetScalarType<T[P], ProdukGedungGroupByOutputType[P]>
        }
      >
    >


  export type produkGedungSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    produkId?: boolean
    gedungId?: boolean
    stockBarang?: boolean
    produk?: boolean | productDefaultArgs<ExtArgs>
    gedung?: boolean | gedungDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produkGedung"]>

  export type produkGedungSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    produkId?: boolean
    gedungId?: boolean
    stockBarang?: boolean
    produk?: boolean | productDefaultArgs<ExtArgs>
    gedung?: boolean | gedungDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produkGedung"]>

  export type produkGedungSelectScalar = {
    id?: boolean
    start?: boolean
    end?: boolean
    produkId?: boolean
    gedungId?: boolean
    stockBarang?: boolean
  }

  export type produkGedungInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produk?: boolean | productDefaultArgs<ExtArgs>
    gedung?: boolean | gedungDefaultArgs<ExtArgs>
  }
  export type produkGedungIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produk?: boolean | productDefaultArgs<ExtArgs>
    gedung?: boolean | gedungDefaultArgs<ExtArgs>
  }

  export type $produkGedungPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "produkGedung"
    objects: {
      produk: Prisma.$productPayload<ExtArgs>
      gedung: Prisma.$gedungPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      start: Date
      end: Date | null
      produkId: string
      gedungId: number
      stockBarang: number
    }, ExtArgs["result"]["produkGedung"]>
    composites: {}
  }

  type produkGedungGetPayload<S extends boolean | null | undefined | produkGedungDefaultArgs> = $Result.GetResult<Prisma.$produkGedungPayload, S>

  type produkGedungCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<produkGedungFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProdukGedungCountAggregateInputType | true
    }

  export interface produkGedungDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['produkGedung'], meta: { name: 'produkGedung' } }
    /**
     * Find zero or one ProdukGedung that matches the filter.
     * @param {produkGedungFindUniqueArgs} args - Arguments to find a ProdukGedung
     * @example
     * // Get one ProdukGedung
     * const produkGedung = await prisma.produkGedung.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends produkGedungFindUniqueArgs>(args: SelectSubset<T, produkGedungFindUniqueArgs<ExtArgs>>): Prisma__produkGedungClient<$Result.GetResult<Prisma.$produkGedungPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProdukGedung that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {produkGedungFindUniqueOrThrowArgs} args - Arguments to find a ProdukGedung
     * @example
     * // Get one ProdukGedung
     * const produkGedung = await prisma.produkGedung.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends produkGedungFindUniqueOrThrowArgs>(args: SelectSubset<T, produkGedungFindUniqueOrThrowArgs<ExtArgs>>): Prisma__produkGedungClient<$Result.GetResult<Prisma.$produkGedungPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProdukGedung that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkGedungFindFirstArgs} args - Arguments to find a ProdukGedung
     * @example
     * // Get one ProdukGedung
     * const produkGedung = await prisma.produkGedung.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends produkGedungFindFirstArgs>(args?: SelectSubset<T, produkGedungFindFirstArgs<ExtArgs>>): Prisma__produkGedungClient<$Result.GetResult<Prisma.$produkGedungPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProdukGedung that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkGedungFindFirstOrThrowArgs} args - Arguments to find a ProdukGedung
     * @example
     * // Get one ProdukGedung
     * const produkGedung = await prisma.produkGedung.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends produkGedungFindFirstOrThrowArgs>(args?: SelectSubset<T, produkGedungFindFirstOrThrowArgs<ExtArgs>>): Prisma__produkGedungClient<$Result.GetResult<Prisma.$produkGedungPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProdukGedungs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkGedungFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProdukGedungs
     * const produkGedungs = await prisma.produkGedung.findMany()
     * 
     * // Get first 10 ProdukGedungs
     * const produkGedungs = await prisma.produkGedung.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produkGedungWithIdOnly = await prisma.produkGedung.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends produkGedungFindManyArgs>(args?: SelectSubset<T, produkGedungFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produkGedungPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProdukGedung.
     * @param {produkGedungCreateArgs} args - Arguments to create a ProdukGedung.
     * @example
     * // Create one ProdukGedung
     * const ProdukGedung = await prisma.produkGedung.create({
     *   data: {
     *     // ... data to create a ProdukGedung
     *   }
     * })
     * 
     */
    create<T extends produkGedungCreateArgs>(args: SelectSubset<T, produkGedungCreateArgs<ExtArgs>>): Prisma__produkGedungClient<$Result.GetResult<Prisma.$produkGedungPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProdukGedungs.
     * @param {produkGedungCreateManyArgs} args - Arguments to create many ProdukGedungs.
     * @example
     * // Create many ProdukGedungs
     * const produkGedung = await prisma.produkGedung.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends produkGedungCreateManyArgs>(args?: SelectSubset<T, produkGedungCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProdukGedungs and returns the data saved in the database.
     * @param {produkGedungCreateManyAndReturnArgs} args - Arguments to create many ProdukGedungs.
     * @example
     * // Create many ProdukGedungs
     * const produkGedung = await prisma.produkGedung.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProdukGedungs and only return the `id`
     * const produkGedungWithIdOnly = await prisma.produkGedung.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends produkGedungCreateManyAndReturnArgs>(args?: SelectSubset<T, produkGedungCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produkGedungPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProdukGedung.
     * @param {produkGedungDeleteArgs} args - Arguments to delete one ProdukGedung.
     * @example
     * // Delete one ProdukGedung
     * const ProdukGedung = await prisma.produkGedung.delete({
     *   where: {
     *     // ... filter to delete one ProdukGedung
     *   }
     * })
     * 
     */
    delete<T extends produkGedungDeleteArgs>(args: SelectSubset<T, produkGedungDeleteArgs<ExtArgs>>): Prisma__produkGedungClient<$Result.GetResult<Prisma.$produkGedungPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProdukGedung.
     * @param {produkGedungUpdateArgs} args - Arguments to update one ProdukGedung.
     * @example
     * // Update one ProdukGedung
     * const produkGedung = await prisma.produkGedung.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends produkGedungUpdateArgs>(args: SelectSubset<T, produkGedungUpdateArgs<ExtArgs>>): Prisma__produkGedungClient<$Result.GetResult<Prisma.$produkGedungPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProdukGedungs.
     * @param {produkGedungDeleteManyArgs} args - Arguments to filter ProdukGedungs to delete.
     * @example
     * // Delete a few ProdukGedungs
     * const { count } = await prisma.produkGedung.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends produkGedungDeleteManyArgs>(args?: SelectSubset<T, produkGedungDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProdukGedungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkGedungUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProdukGedungs
     * const produkGedung = await prisma.produkGedung.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends produkGedungUpdateManyArgs>(args: SelectSubset<T, produkGedungUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProdukGedung.
     * @param {produkGedungUpsertArgs} args - Arguments to update or create a ProdukGedung.
     * @example
     * // Update or create a ProdukGedung
     * const produkGedung = await prisma.produkGedung.upsert({
     *   create: {
     *     // ... data to create a ProdukGedung
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProdukGedung we want to update
     *   }
     * })
     */
    upsert<T extends produkGedungUpsertArgs>(args: SelectSubset<T, produkGedungUpsertArgs<ExtArgs>>): Prisma__produkGedungClient<$Result.GetResult<Prisma.$produkGedungPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProdukGedungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkGedungCountArgs} args - Arguments to filter ProdukGedungs to count.
     * @example
     * // Count the number of ProdukGedungs
     * const count = await prisma.produkGedung.count({
     *   where: {
     *     // ... the filter for the ProdukGedungs we want to count
     *   }
     * })
    **/
    count<T extends produkGedungCountArgs>(
      args?: Subset<T, produkGedungCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdukGedungCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProdukGedung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukGedungAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdukGedungAggregateArgs>(args: Subset<T, ProdukGedungAggregateArgs>): Prisma.PrismaPromise<GetProdukGedungAggregateType<T>>

    /**
     * Group by ProdukGedung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkGedungGroupByArgs} args - Group by arguments.
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
      T extends produkGedungGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: produkGedungGroupByArgs['orderBy'] }
        : { orderBy?: produkGedungGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, produkGedungGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdukGedungGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the produkGedung model
   */
  readonly fields: produkGedungFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for produkGedung.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__produkGedungClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produk<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    gedung<T extends gedungDefaultArgs<ExtArgs> = {}>(args?: Subset<T, gedungDefaultArgs<ExtArgs>>): Prisma__gedungClient<$Result.GetResult<Prisma.$gedungPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the produkGedung model
   */ 
  interface produkGedungFieldRefs {
    readonly id: FieldRef<"produkGedung", 'String'>
    readonly start: FieldRef<"produkGedung", 'DateTime'>
    readonly end: FieldRef<"produkGedung", 'DateTime'>
    readonly produkId: FieldRef<"produkGedung", 'String'>
    readonly gedungId: FieldRef<"produkGedung", 'Int'>
    readonly stockBarang: FieldRef<"produkGedung", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * produkGedung findUnique
   */
  export type produkGedungFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produkGedung
     */
    select?: produkGedungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkGedungInclude<ExtArgs> | null
    /**
     * Filter, which produkGedung to fetch.
     */
    where: produkGedungWhereUniqueInput
  }

  /**
   * produkGedung findUniqueOrThrow
   */
  export type produkGedungFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produkGedung
     */
    select?: produkGedungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkGedungInclude<ExtArgs> | null
    /**
     * Filter, which produkGedung to fetch.
     */
    where: produkGedungWhereUniqueInput
  }

  /**
   * produkGedung findFirst
   */
  export type produkGedungFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produkGedung
     */
    select?: produkGedungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkGedungInclude<ExtArgs> | null
    /**
     * Filter, which produkGedung to fetch.
     */
    where?: produkGedungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produkGedungs to fetch.
     */
    orderBy?: produkGedungOrderByWithRelationInput | produkGedungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produkGedungs.
     */
    cursor?: produkGedungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produkGedungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produkGedungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produkGedungs.
     */
    distinct?: ProdukGedungScalarFieldEnum | ProdukGedungScalarFieldEnum[]
  }

  /**
   * produkGedung findFirstOrThrow
   */
  export type produkGedungFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produkGedung
     */
    select?: produkGedungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkGedungInclude<ExtArgs> | null
    /**
     * Filter, which produkGedung to fetch.
     */
    where?: produkGedungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produkGedungs to fetch.
     */
    orderBy?: produkGedungOrderByWithRelationInput | produkGedungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produkGedungs.
     */
    cursor?: produkGedungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produkGedungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produkGedungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produkGedungs.
     */
    distinct?: ProdukGedungScalarFieldEnum | ProdukGedungScalarFieldEnum[]
  }

  /**
   * produkGedung findMany
   */
  export type produkGedungFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produkGedung
     */
    select?: produkGedungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkGedungInclude<ExtArgs> | null
    /**
     * Filter, which produkGedungs to fetch.
     */
    where?: produkGedungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produkGedungs to fetch.
     */
    orderBy?: produkGedungOrderByWithRelationInput | produkGedungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing produkGedungs.
     */
    cursor?: produkGedungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produkGedungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produkGedungs.
     */
    skip?: number
    distinct?: ProdukGedungScalarFieldEnum | ProdukGedungScalarFieldEnum[]
  }

  /**
   * produkGedung create
   */
  export type produkGedungCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produkGedung
     */
    select?: produkGedungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkGedungInclude<ExtArgs> | null
    /**
     * The data needed to create a produkGedung.
     */
    data: XOR<produkGedungCreateInput, produkGedungUncheckedCreateInput>
  }

  /**
   * produkGedung createMany
   */
  export type produkGedungCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many produkGedungs.
     */
    data: produkGedungCreateManyInput | produkGedungCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * produkGedung createManyAndReturn
   */
  export type produkGedungCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produkGedung
     */
    select?: produkGedungSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many produkGedungs.
     */
    data: produkGedungCreateManyInput | produkGedungCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkGedungIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * produkGedung update
   */
  export type produkGedungUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produkGedung
     */
    select?: produkGedungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkGedungInclude<ExtArgs> | null
    /**
     * The data needed to update a produkGedung.
     */
    data: XOR<produkGedungUpdateInput, produkGedungUncheckedUpdateInput>
    /**
     * Choose, which produkGedung to update.
     */
    where: produkGedungWhereUniqueInput
  }

  /**
   * produkGedung updateMany
   */
  export type produkGedungUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update produkGedungs.
     */
    data: XOR<produkGedungUpdateManyMutationInput, produkGedungUncheckedUpdateManyInput>
    /**
     * Filter which produkGedungs to update
     */
    where?: produkGedungWhereInput
  }

  /**
   * produkGedung upsert
   */
  export type produkGedungUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produkGedung
     */
    select?: produkGedungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkGedungInclude<ExtArgs> | null
    /**
     * The filter to search for the produkGedung to update in case it exists.
     */
    where: produkGedungWhereUniqueInput
    /**
     * In case the produkGedung found by the `where` argument doesn't exist, create a new produkGedung with this data.
     */
    create: XOR<produkGedungCreateInput, produkGedungUncheckedCreateInput>
    /**
     * In case the produkGedung was found with the provided `where` argument, update it with this data.
     */
    update: XOR<produkGedungUpdateInput, produkGedungUncheckedUpdateInput>
  }

  /**
   * produkGedung delete
   */
  export type produkGedungDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produkGedung
     */
    select?: produkGedungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkGedungInclude<ExtArgs> | null
    /**
     * Filter which produkGedung to delete.
     */
    where: produkGedungWhereUniqueInput
  }

  /**
   * produkGedung deleteMany
   */
  export type produkGedungDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produkGedungs to delete
     */
    where?: produkGedungWhereInput
  }

  /**
   * produkGedung without action
   */
  export type produkGedungDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produkGedung
     */
    select?: produkGedungSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkGedungInclude<ExtArgs> | null
  }


  /**
   * Model pendingProduct
   */

  export type AggregatePendingProduct = {
    _count: PendingProductCountAggregateOutputType | null
    _avg: PendingProductAvgAggregateOutputType | null
    _sum: PendingProductSumAggregateOutputType | null
    _min: PendingProductMinAggregateOutputType | null
    _max: PendingProductMaxAggregateOutputType | null
  }

  export type PendingProductAvgAggregateOutputType = {
    stockBarang: number | null
    gedungId: number | null
  }

  export type PendingProductSumAggregateOutputType = {
    stockBarang: number | null
    gedungId: number | null
  }

  export type PendingProductMinAggregateOutputType = {
    id: string | null
    start: Date | null
    end: Date | null
    stockBarang: number | null
    user: string | null
    username: string | null
    role: string | null
    note: string | null
    jenisBarang: string | null
    statusProduct: boolean | null
    produkId: string | null
    gedungId: number | null
  }

  export type PendingProductMaxAggregateOutputType = {
    id: string | null
    start: Date | null
    end: Date | null
    stockBarang: number | null
    user: string | null
    username: string | null
    role: string | null
    note: string | null
    jenisBarang: string | null
    statusProduct: boolean | null
    produkId: string | null
    gedungId: number | null
  }

  export type PendingProductCountAggregateOutputType = {
    id: number
    start: number
    end: number
    stockBarang: number
    user: number
    username: number
    role: number
    note: number
    jenisBarang: number
    statusProduct: number
    produkId: number
    gedungId: number
    _all: number
  }


  export type PendingProductAvgAggregateInputType = {
    stockBarang?: true
    gedungId?: true
  }

  export type PendingProductSumAggregateInputType = {
    stockBarang?: true
    gedungId?: true
  }

  export type PendingProductMinAggregateInputType = {
    id?: true
    start?: true
    end?: true
    stockBarang?: true
    user?: true
    username?: true
    role?: true
    note?: true
    jenisBarang?: true
    statusProduct?: true
    produkId?: true
    gedungId?: true
  }

  export type PendingProductMaxAggregateInputType = {
    id?: true
    start?: true
    end?: true
    stockBarang?: true
    user?: true
    username?: true
    role?: true
    note?: true
    jenisBarang?: true
    statusProduct?: true
    produkId?: true
    gedungId?: true
  }

  export type PendingProductCountAggregateInputType = {
    id?: true
    start?: true
    end?: true
    stockBarang?: true
    user?: true
    username?: true
    role?: true
    note?: true
    jenisBarang?: true
    statusProduct?: true
    produkId?: true
    gedungId?: true
    _all?: true
  }

  export type PendingProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pendingProduct to aggregate.
     */
    where?: pendingProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pendingProducts to fetch.
     */
    orderBy?: pendingProductOrderByWithRelationInput | pendingProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pendingProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pendingProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pendingProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pendingProducts
    **/
    _count?: true | PendingProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PendingProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PendingProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PendingProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PendingProductMaxAggregateInputType
  }

  export type GetPendingProductAggregateType<T extends PendingProductAggregateArgs> = {
        [P in keyof T & keyof AggregatePendingProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePendingProduct[P]>
      : GetScalarType<T[P], AggregatePendingProduct[P]>
  }




  export type pendingProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pendingProductWhereInput
    orderBy?: pendingProductOrderByWithAggregationInput | pendingProductOrderByWithAggregationInput[]
    by: PendingProductScalarFieldEnum[] | PendingProductScalarFieldEnum
    having?: pendingProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PendingProductCountAggregateInputType | true
    _avg?: PendingProductAvgAggregateInputType
    _sum?: PendingProductSumAggregateInputType
    _min?: PendingProductMinAggregateInputType
    _max?: PendingProductMaxAggregateInputType
  }

  export type PendingProductGroupByOutputType = {
    id: string
    start: Date
    end: Date | null
    stockBarang: number
    user: string | null
    username: string | null
    role: string | null
    note: string | null
    jenisBarang: string | null
    statusProduct: boolean
    produkId: string | null
    gedungId: number | null
    _count: PendingProductCountAggregateOutputType | null
    _avg: PendingProductAvgAggregateOutputType | null
    _sum: PendingProductSumAggregateOutputType | null
    _min: PendingProductMinAggregateOutputType | null
    _max: PendingProductMaxAggregateOutputType | null
  }

  type GetPendingProductGroupByPayload<T extends pendingProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PendingProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PendingProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PendingProductGroupByOutputType[P]>
            : GetScalarType<T[P], PendingProductGroupByOutputType[P]>
        }
      >
    >


  export type pendingProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    stockBarang?: boolean
    user?: boolean
    username?: boolean
    role?: boolean
    note?: boolean
    jenisBarang?: boolean
    statusProduct?: boolean
    produkId?: boolean
    gedungId?: boolean
    products?: boolean | pendingProduct$productsArgs<ExtArgs>
    _count?: boolean | PendingProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pendingProduct"]>

  export type pendingProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    stockBarang?: boolean
    user?: boolean
    username?: boolean
    role?: boolean
    note?: boolean
    jenisBarang?: boolean
    statusProduct?: boolean
    produkId?: boolean
    gedungId?: boolean
  }, ExtArgs["result"]["pendingProduct"]>

  export type pendingProductSelectScalar = {
    id?: boolean
    start?: boolean
    end?: boolean
    stockBarang?: boolean
    user?: boolean
    username?: boolean
    role?: boolean
    note?: boolean
    jenisBarang?: boolean
    statusProduct?: boolean
    produkId?: boolean
    gedungId?: boolean
  }

  export type pendingProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | pendingProduct$productsArgs<ExtArgs>
    _count?: boolean | PendingProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type pendingProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $pendingProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pendingProduct"
    objects: {
      products: Prisma.$productPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      start: Date
      end: Date | null
      stockBarang: number
      user: string | null
      username: string | null
      role: string | null
      note: string | null
      jenisBarang: string | null
      statusProduct: boolean
      produkId: string | null
      gedungId: number | null
    }, ExtArgs["result"]["pendingProduct"]>
    composites: {}
  }

  type pendingProductGetPayload<S extends boolean | null | undefined | pendingProductDefaultArgs> = $Result.GetResult<Prisma.$pendingProductPayload, S>

  type pendingProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<pendingProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PendingProductCountAggregateInputType | true
    }

  export interface pendingProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pendingProduct'], meta: { name: 'pendingProduct' } }
    /**
     * Find zero or one PendingProduct that matches the filter.
     * @param {pendingProductFindUniqueArgs} args - Arguments to find a PendingProduct
     * @example
     * // Get one PendingProduct
     * const pendingProduct = await prisma.pendingProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pendingProductFindUniqueArgs>(args: SelectSubset<T, pendingProductFindUniqueArgs<ExtArgs>>): Prisma__pendingProductClient<$Result.GetResult<Prisma.$pendingProductPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PendingProduct that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {pendingProductFindUniqueOrThrowArgs} args - Arguments to find a PendingProduct
     * @example
     * // Get one PendingProduct
     * const pendingProduct = await prisma.pendingProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pendingProductFindUniqueOrThrowArgs>(args: SelectSubset<T, pendingProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pendingProductClient<$Result.GetResult<Prisma.$pendingProductPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PendingProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pendingProductFindFirstArgs} args - Arguments to find a PendingProduct
     * @example
     * // Get one PendingProduct
     * const pendingProduct = await prisma.pendingProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pendingProductFindFirstArgs>(args?: SelectSubset<T, pendingProductFindFirstArgs<ExtArgs>>): Prisma__pendingProductClient<$Result.GetResult<Prisma.$pendingProductPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PendingProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pendingProductFindFirstOrThrowArgs} args - Arguments to find a PendingProduct
     * @example
     * // Get one PendingProduct
     * const pendingProduct = await prisma.pendingProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pendingProductFindFirstOrThrowArgs>(args?: SelectSubset<T, pendingProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__pendingProductClient<$Result.GetResult<Prisma.$pendingProductPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PendingProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pendingProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PendingProducts
     * const pendingProducts = await prisma.pendingProduct.findMany()
     * 
     * // Get first 10 PendingProducts
     * const pendingProducts = await prisma.pendingProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pendingProductWithIdOnly = await prisma.pendingProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pendingProductFindManyArgs>(args?: SelectSubset<T, pendingProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pendingProductPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PendingProduct.
     * @param {pendingProductCreateArgs} args - Arguments to create a PendingProduct.
     * @example
     * // Create one PendingProduct
     * const PendingProduct = await prisma.pendingProduct.create({
     *   data: {
     *     // ... data to create a PendingProduct
     *   }
     * })
     * 
     */
    create<T extends pendingProductCreateArgs>(args: SelectSubset<T, pendingProductCreateArgs<ExtArgs>>): Prisma__pendingProductClient<$Result.GetResult<Prisma.$pendingProductPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PendingProducts.
     * @param {pendingProductCreateManyArgs} args - Arguments to create many PendingProducts.
     * @example
     * // Create many PendingProducts
     * const pendingProduct = await prisma.pendingProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pendingProductCreateManyArgs>(args?: SelectSubset<T, pendingProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PendingProducts and returns the data saved in the database.
     * @param {pendingProductCreateManyAndReturnArgs} args - Arguments to create many PendingProducts.
     * @example
     * // Create many PendingProducts
     * const pendingProduct = await prisma.pendingProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PendingProducts and only return the `id`
     * const pendingProductWithIdOnly = await prisma.pendingProduct.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pendingProductCreateManyAndReturnArgs>(args?: SelectSubset<T, pendingProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pendingProductPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PendingProduct.
     * @param {pendingProductDeleteArgs} args - Arguments to delete one PendingProduct.
     * @example
     * // Delete one PendingProduct
     * const PendingProduct = await prisma.pendingProduct.delete({
     *   where: {
     *     // ... filter to delete one PendingProduct
     *   }
     * })
     * 
     */
    delete<T extends pendingProductDeleteArgs>(args: SelectSubset<T, pendingProductDeleteArgs<ExtArgs>>): Prisma__pendingProductClient<$Result.GetResult<Prisma.$pendingProductPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PendingProduct.
     * @param {pendingProductUpdateArgs} args - Arguments to update one PendingProduct.
     * @example
     * // Update one PendingProduct
     * const pendingProduct = await prisma.pendingProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pendingProductUpdateArgs>(args: SelectSubset<T, pendingProductUpdateArgs<ExtArgs>>): Prisma__pendingProductClient<$Result.GetResult<Prisma.$pendingProductPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PendingProducts.
     * @param {pendingProductDeleteManyArgs} args - Arguments to filter PendingProducts to delete.
     * @example
     * // Delete a few PendingProducts
     * const { count } = await prisma.pendingProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pendingProductDeleteManyArgs>(args?: SelectSubset<T, pendingProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PendingProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pendingProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PendingProducts
     * const pendingProduct = await prisma.pendingProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pendingProductUpdateManyArgs>(args: SelectSubset<T, pendingProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PendingProduct.
     * @param {pendingProductUpsertArgs} args - Arguments to update or create a PendingProduct.
     * @example
     * // Update or create a PendingProduct
     * const pendingProduct = await prisma.pendingProduct.upsert({
     *   create: {
     *     // ... data to create a PendingProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PendingProduct we want to update
     *   }
     * })
     */
    upsert<T extends pendingProductUpsertArgs>(args: SelectSubset<T, pendingProductUpsertArgs<ExtArgs>>): Prisma__pendingProductClient<$Result.GetResult<Prisma.$pendingProductPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PendingProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pendingProductCountArgs} args - Arguments to filter PendingProducts to count.
     * @example
     * // Count the number of PendingProducts
     * const count = await prisma.pendingProduct.count({
     *   where: {
     *     // ... the filter for the PendingProducts we want to count
     *   }
     * })
    **/
    count<T extends pendingProductCountArgs>(
      args?: Subset<T, pendingProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PendingProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PendingProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PendingProductAggregateArgs>(args: Subset<T, PendingProductAggregateArgs>): Prisma.PrismaPromise<GetPendingProductAggregateType<T>>

    /**
     * Group by PendingProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pendingProductGroupByArgs} args - Group by arguments.
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
      T extends pendingProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pendingProductGroupByArgs['orderBy'] }
        : { orderBy?: pendingProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pendingProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPendingProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pendingProduct model
   */
  readonly fields: pendingProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pendingProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pendingProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends pendingProduct$productsArgs<ExtArgs> = {}>(args?: Subset<T, pendingProduct$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the pendingProduct model
   */ 
  interface pendingProductFieldRefs {
    readonly id: FieldRef<"pendingProduct", 'String'>
    readonly start: FieldRef<"pendingProduct", 'DateTime'>
    readonly end: FieldRef<"pendingProduct", 'DateTime'>
    readonly stockBarang: FieldRef<"pendingProduct", 'Int'>
    readonly user: FieldRef<"pendingProduct", 'String'>
    readonly username: FieldRef<"pendingProduct", 'String'>
    readonly role: FieldRef<"pendingProduct", 'String'>
    readonly note: FieldRef<"pendingProduct", 'String'>
    readonly jenisBarang: FieldRef<"pendingProduct", 'String'>
    readonly statusProduct: FieldRef<"pendingProduct", 'Boolean'>
    readonly produkId: FieldRef<"pendingProduct", 'String'>
    readonly gedungId: FieldRef<"pendingProduct", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * pendingProduct findUnique
   */
  export type pendingProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendingProduct
     */
    select?: pendingProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendingProductInclude<ExtArgs> | null
    /**
     * Filter, which pendingProduct to fetch.
     */
    where: pendingProductWhereUniqueInput
  }

  /**
   * pendingProduct findUniqueOrThrow
   */
  export type pendingProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendingProduct
     */
    select?: pendingProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendingProductInclude<ExtArgs> | null
    /**
     * Filter, which pendingProduct to fetch.
     */
    where: pendingProductWhereUniqueInput
  }

  /**
   * pendingProduct findFirst
   */
  export type pendingProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendingProduct
     */
    select?: pendingProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendingProductInclude<ExtArgs> | null
    /**
     * Filter, which pendingProduct to fetch.
     */
    where?: pendingProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pendingProducts to fetch.
     */
    orderBy?: pendingProductOrderByWithRelationInput | pendingProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pendingProducts.
     */
    cursor?: pendingProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pendingProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pendingProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pendingProducts.
     */
    distinct?: PendingProductScalarFieldEnum | PendingProductScalarFieldEnum[]
  }

  /**
   * pendingProduct findFirstOrThrow
   */
  export type pendingProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendingProduct
     */
    select?: pendingProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendingProductInclude<ExtArgs> | null
    /**
     * Filter, which pendingProduct to fetch.
     */
    where?: pendingProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pendingProducts to fetch.
     */
    orderBy?: pendingProductOrderByWithRelationInput | pendingProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pendingProducts.
     */
    cursor?: pendingProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pendingProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pendingProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pendingProducts.
     */
    distinct?: PendingProductScalarFieldEnum | PendingProductScalarFieldEnum[]
  }

  /**
   * pendingProduct findMany
   */
  export type pendingProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendingProduct
     */
    select?: pendingProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendingProductInclude<ExtArgs> | null
    /**
     * Filter, which pendingProducts to fetch.
     */
    where?: pendingProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pendingProducts to fetch.
     */
    orderBy?: pendingProductOrderByWithRelationInput | pendingProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pendingProducts.
     */
    cursor?: pendingProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pendingProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pendingProducts.
     */
    skip?: number
    distinct?: PendingProductScalarFieldEnum | PendingProductScalarFieldEnum[]
  }

  /**
   * pendingProduct create
   */
  export type pendingProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendingProduct
     */
    select?: pendingProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendingProductInclude<ExtArgs> | null
    /**
     * The data needed to create a pendingProduct.
     */
    data?: XOR<pendingProductCreateInput, pendingProductUncheckedCreateInput>
  }

  /**
   * pendingProduct createMany
   */
  export type pendingProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pendingProducts.
     */
    data: pendingProductCreateManyInput | pendingProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pendingProduct createManyAndReturn
   */
  export type pendingProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendingProduct
     */
    select?: pendingProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many pendingProducts.
     */
    data: pendingProductCreateManyInput | pendingProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pendingProduct update
   */
  export type pendingProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendingProduct
     */
    select?: pendingProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendingProductInclude<ExtArgs> | null
    /**
     * The data needed to update a pendingProduct.
     */
    data: XOR<pendingProductUpdateInput, pendingProductUncheckedUpdateInput>
    /**
     * Choose, which pendingProduct to update.
     */
    where: pendingProductWhereUniqueInput
  }

  /**
   * pendingProduct updateMany
   */
  export type pendingProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pendingProducts.
     */
    data: XOR<pendingProductUpdateManyMutationInput, pendingProductUncheckedUpdateManyInput>
    /**
     * Filter which pendingProducts to update
     */
    where?: pendingProductWhereInput
  }

  /**
   * pendingProduct upsert
   */
  export type pendingProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendingProduct
     */
    select?: pendingProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendingProductInclude<ExtArgs> | null
    /**
     * The filter to search for the pendingProduct to update in case it exists.
     */
    where: pendingProductWhereUniqueInput
    /**
     * In case the pendingProduct found by the `where` argument doesn't exist, create a new pendingProduct with this data.
     */
    create: XOR<pendingProductCreateInput, pendingProductUncheckedCreateInput>
    /**
     * In case the pendingProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pendingProductUpdateInput, pendingProductUncheckedUpdateInput>
  }

  /**
   * pendingProduct delete
   */
  export type pendingProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendingProduct
     */
    select?: pendingProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendingProductInclude<ExtArgs> | null
    /**
     * Filter which pendingProduct to delete.
     */
    where: pendingProductWhereUniqueInput
  }

  /**
   * pendingProduct deleteMany
   */
  export type pendingProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pendingProducts to delete
     */
    where?: pendingProductWhereInput
  }

  /**
   * pendingProduct.products
   */
  export type pendingProduct$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * pendingProduct without action
   */
  export type pendingProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendingProduct
     */
    select?: pendingProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendingProductInclude<ExtArgs> | null
  }


  /**
   * Model notifUser
   */

  export type AggregateNotifUser = {
    _count: NotifUserCountAggregateOutputType | null
    _avg: NotifUserAvgAggregateOutputType | null
    _sum: NotifUserSumAggregateOutputType | null
    _min: NotifUserMinAggregateOutputType | null
    _max: NotifUserMaxAggregateOutputType | null
  }

  export type NotifUserAvgAggregateOutputType = {
    jumlahBarang: number | null
  }

  export type NotifUserSumAggregateOutputType = {
    jumlahBarang: number | null
  }

  export type NotifUserMinAggregateOutputType = {
    id: string | null
    start: Date | null
    end: Date | null
    username: string | null
    namaBarang: string | null
    jumlahBarang: number | null
    note: string | null
  }

  export type NotifUserMaxAggregateOutputType = {
    id: string | null
    start: Date | null
    end: Date | null
    username: string | null
    namaBarang: string | null
    jumlahBarang: number | null
    note: string | null
  }

  export type NotifUserCountAggregateOutputType = {
    id: number
    start: number
    end: number
    username: number
    namaBarang: number
    jumlahBarang: number
    note: number
    _all: number
  }


  export type NotifUserAvgAggregateInputType = {
    jumlahBarang?: true
  }

  export type NotifUserSumAggregateInputType = {
    jumlahBarang?: true
  }

  export type NotifUserMinAggregateInputType = {
    id?: true
    start?: true
    end?: true
    username?: true
    namaBarang?: true
    jumlahBarang?: true
    note?: true
  }

  export type NotifUserMaxAggregateInputType = {
    id?: true
    start?: true
    end?: true
    username?: true
    namaBarang?: true
    jumlahBarang?: true
    note?: true
  }

  export type NotifUserCountAggregateInputType = {
    id?: true
    start?: true
    end?: true
    username?: true
    namaBarang?: true
    jumlahBarang?: true
    note?: true
    _all?: true
  }

  export type NotifUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifUser to aggregate.
     */
    where?: notifUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifUsers to fetch.
     */
    orderBy?: notifUserOrderByWithRelationInput | notifUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notifUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notifUsers
    **/
    _count?: true | NotifUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotifUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotifUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotifUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotifUserMaxAggregateInputType
  }

  export type GetNotifUserAggregateType<T extends NotifUserAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifUser[P]>
      : GetScalarType<T[P], AggregateNotifUser[P]>
  }




  export type notifUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notifUserWhereInput
    orderBy?: notifUserOrderByWithAggregationInput | notifUserOrderByWithAggregationInput[]
    by: NotifUserScalarFieldEnum[] | NotifUserScalarFieldEnum
    having?: notifUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotifUserCountAggregateInputType | true
    _avg?: NotifUserAvgAggregateInputType
    _sum?: NotifUserSumAggregateInputType
    _min?: NotifUserMinAggregateInputType
    _max?: NotifUserMaxAggregateInputType
  }

  export type NotifUserGroupByOutputType = {
    id: string
    start: Date
    end: Date | null
    username: string | null
    namaBarang: string | null
    jumlahBarang: number | null
    note: string | null
    _count: NotifUserCountAggregateOutputType | null
    _avg: NotifUserAvgAggregateOutputType | null
    _sum: NotifUserSumAggregateOutputType | null
    _min: NotifUserMinAggregateOutputType | null
    _max: NotifUserMaxAggregateOutputType | null
  }

  type GetNotifUserGroupByPayload<T extends notifUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotifUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotifUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotifUserGroupByOutputType[P]>
            : GetScalarType<T[P], NotifUserGroupByOutputType[P]>
        }
      >
    >


  export type notifUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    username?: boolean
    namaBarang?: boolean
    jumlahBarang?: boolean
    note?: boolean
  }, ExtArgs["result"]["notifUser"]>

  export type notifUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    username?: boolean
    namaBarang?: boolean
    jumlahBarang?: boolean
    note?: boolean
  }, ExtArgs["result"]["notifUser"]>

  export type notifUserSelectScalar = {
    id?: boolean
    start?: boolean
    end?: boolean
    username?: boolean
    namaBarang?: boolean
    jumlahBarang?: boolean
    note?: boolean
  }


  export type $notifUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notifUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      start: Date
      end: Date | null
      username: string | null
      namaBarang: string | null
      jumlahBarang: number | null
      note: string | null
    }, ExtArgs["result"]["notifUser"]>
    composites: {}
  }

  type notifUserGetPayload<S extends boolean | null | undefined | notifUserDefaultArgs> = $Result.GetResult<Prisma.$notifUserPayload, S>

  type notifUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<notifUserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotifUserCountAggregateInputType | true
    }

  export interface notifUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notifUser'], meta: { name: 'notifUser' } }
    /**
     * Find zero or one NotifUser that matches the filter.
     * @param {notifUserFindUniqueArgs} args - Arguments to find a NotifUser
     * @example
     * // Get one NotifUser
     * const notifUser = await prisma.notifUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notifUserFindUniqueArgs>(args: SelectSubset<T, notifUserFindUniqueArgs<ExtArgs>>): Prisma__notifUserClient<$Result.GetResult<Prisma.$notifUserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one NotifUser that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {notifUserFindUniqueOrThrowArgs} args - Arguments to find a NotifUser
     * @example
     * // Get one NotifUser
     * const notifUser = await prisma.notifUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notifUserFindUniqueOrThrowArgs>(args: SelectSubset<T, notifUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notifUserClient<$Result.GetResult<Prisma.$notifUserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first NotifUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notifUserFindFirstArgs} args - Arguments to find a NotifUser
     * @example
     * // Get one NotifUser
     * const notifUser = await prisma.notifUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notifUserFindFirstArgs>(args?: SelectSubset<T, notifUserFindFirstArgs<ExtArgs>>): Prisma__notifUserClient<$Result.GetResult<Prisma.$notifUserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first NotifUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notifUserFindFirstOrThrowArgs} args - Arguments to find a NotifUser
     * @example
     * // Get one NotifUser
     * const notifUser = await prisma.notifUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notifUserFindFirstOrThrowArgs>(args?: SelectSubset<T, notifUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__notifUserClient<$Result.GetResult<Prisma.$notifUserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more NotifUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notifUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotifUsers
     * const notifUsers = await prisma.notifUser.findMany()
     * 
     * // Get first 10 NotifUsers
     * const notifUsers = await prisma.notifUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notifUserWithIdOnly = await prisma.notifUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notifUserFindManyArgs>(args?: SelectSubset<T, notifUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notifUserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a NotifUser.
     * @param {notifUserCreateArgs} args - Arguments to create a NotifUser.
     * @example
     * // Create one NotifUser
     * const NotifUser = await prisma.notifUser.create({
     *   data: {
     *     // ... data to create a NotifUser
     *   }
     * })
     * 
     */
    create<T extends notifUserCreateArgs>(args: SelectSubset<T, notifUserCreateArgs<ExtArgs>>): Prisma__notifUserClient<$Result.GetResult<Prisma.$notifUserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many NotifUsers.
     * @param {notifUserCreateManyArgs} args - Arguments to create many NotifUsers.
     * @example
     * // Create many NotifUsers
     * const notifUser = await prisma.notifUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notifUserCreateManyArgs>(args?: SelectSubset<T, notifUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NotifUsers and returns the data saved in the database.
     * @param {notifUserCreateManyAndReturnArgs} args - Arguments to create many NotifUsers.
     * @example
     * // Create many NotifUsers
     * const notifUser = await prisma.notifUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NotifUsers and only return the `id`
     * const notifUserWithIdOnly = await prisma.notifUser.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends notifUserCreateManyAndReturnArgs>(args?: SelectSubset<T, notifUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notifUserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a NotifUser.
     * @param {notifUserDeleteArgs} args - Arguments to delete one NotifUser.
     * @example
     * // Delete one NotifUser
     * const NotifUser = await prisma.notifUser.delete({
     *   where: {
     *     // ... filter to delete one NotifUser
     *   }
     * })
     * 
     */
    delete<T extends notifUserDeleteArgs>(args: SelectSubset<T, notifUserDeleteArgs<ExtArgs>>): Prisma__notifUserClient<$Result.GetResult<Prisma.$notifUserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one NotifUser.
     * @param {notifUserUpdateArgs} args - Arguments to update one NotifUser.
     * @example
     * // Update one NotifUser
     * const notifUser = await prisma.notifUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notifUserUpdateArgs>(args: SelectSubset<T, notifUserUpdateArgs<ExtArgs>>): Prisma__notifUserClient<$Result.GetResult<Prisma.$notifUserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more NotifUsers.
     * @param {notifUserDeleteManyArgs} args - Arguments to filter NotifUsers to delete.
     * @example
     * // Delete a few NotifUsers
     * const { count } = await prisma.notifUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notifUserDeleteManyArgs>(args?: SelectSubset<T, notifUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotifUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notifUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotifUsers
     * const notifUser = await prisma.notifUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notifUserUpdateManyArgs>(args: SelectSubset<T, notifUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NotifUser.
     * @param {notifUserUpsertArgs} args - Arguments to update or create a NotifUser.
     * @example
     * // Update or create a NotifUser
     * const notifUser = await prisma.notifUser.upsert({
     *   create: {
     *     // ... data to create a NotifUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotifUser we want to update
     *   }
     * })
     */
    upsert<T extends notifUserUpsertArgs>(args: SelectSubset<T, notifUserUpsertArgs<ExtArgs>>): Prisma__notifUserClient<$Result.GetResult<Prisma.$notifUserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of NotifUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notifUserCountArgs} args - Arguments to filter NotifUsers to count.
     * @example
     * // Count the number of NotifUsers
     * const count = await prisma.notifUser.count({
     *   where: {
     *     // ... the filter for the NotifUsers we want to count
     *   }
     * })
    **/
    count<T extends notifUserCountArgs>(
      args?: Subset<T, notifUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotifUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotifUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotifUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotifUserAggregateArgs>(args: Subset<T, NotifUserAggregateArgs>): Prisma.PrismaPromise<GetNotifUserAggregateType<T>>

    /**
     * Group by NotifUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notifUserGroupByArgs} args - Group by arguments.
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
      T extends notifUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notifUserGroupByArgs['orderBy'] }
        : { orderBy?: notifUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, notifUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotifUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notifUser model
   */
  readonly fields: notifUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notifUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notifUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the notifUser model
   */ 
  interface notifUserFieldRefs {
    readonly id: FieldRef<"notifUser", 'String'>
    readonly start: FieldRef<"notifUser", 'DateTime'>
    readonly end: FieldRef<"notifUser", 'DateTime'>
    readonly username: FieldRef<"notifUser", 'String'>
    readonly namaBarang: FieldRef<"notifUser", 'String'>
    readonly jumlahBarang: FieldRef<"notifUser", 'Int'>
    readonly note: FieldRef<"notifUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * notifUser findUnique
   */
  export type notifUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifUser
     */
    select?: notifUserSelect<ExtArgs> | null
    /**
     * Filter, which notifUser to fetch.
     */
    where: notifUserWhereUniqueInput
  }

  /**
   * notifUser findUniqueOrThrow
   */
  export type notifUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifUser
     */
    select?: notifUserSelect<ExtArgs> | null
    /**
     * Filter, which notifUser to fetch.
     */
    where: notifUserWhereUniqueInput
  }

  /**
   * notifUser findFirst
   */
  export type notifUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifUser
     */
    select?: notifUserSelect<ExtArgs> | null
    /**
     * Filter, which notifUser to fetch.
     */
    where?: notifUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifUsers to fetch.
     */
    orderBy?: notifUserOrderByWithRelationInput | notifUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifUsers.
     */
    cursor?: notifUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifUsers.
     */
    distinct?: NotifUserScalarFieldEnum | NotifUserScalarFieldEnum[]
  }

  /**
   * notifUser findFirstOrThrow
   */
  export type notifUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifUser
     */
    select?: notifUserSelect<ExtArgs> | null
    /**
     * Filter, which notifUser to fetch.
     */
    where?: notifUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifUsers to fetch.
     */
    orderBy?: notifUserOrderByWithRelationInput | notifUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifUsers.
     */
    cursor?: notifUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifUsers.
     */
    distinct?: NotifUserScalarFieldEnum | NotifUserScalarFieldEnum[]
  }

  /**
   * notifUser findMany
   */
  export type notifUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifUser
     */
    select?: notifUserSelect<ExtArgs> | null
    /**
     * Filter, which notifUsers to fetch.
     */
    where?: notifUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifUsers to fetch.
     */
    orderBy?: notifUserOrderByWithRelationInput | notifUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notifUsers.
     */
    cursor?: notifUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifUsers.
     */
    skip?: number
    distinct?: NotifUserScalarFieldEnum | NotifUserScalarFieldEnum[]
  }

  /**
   * notifUser create
   */
  export type notifUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifUser
     */
    select?: notifUserSelect<ExtArgs> | null
    /**
     * The data needed to create a notifUser.
     */
    data?: XOR<notifUserCreateInput, notifUserUncheckedCreateInput>
  }

  /**
   * notifUser createMany
   */
  export type notifUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notifUsers.
     */
    data: notifUserCreateManyInput | notifUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notifUser createManyAndReturn
   */
  export type notifUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifUser
     */
    select?: notifUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many notifUsers.
     */
    data: notifUserCreateManyInput | notifUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notifUser update
   */
  export type notifUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifUser
     */
    select?: notifUserSelect<ExtArgs> | null
    /**
     * The data needed to update a notifUser.
     */
    data: XOR<notifUserUpdateInput, notifUserUncheckedUpdateInput>
    /**
     * Choose, which notifUser to update.
     */
    where: notifUserWhereUniqueInput
  }

  /**
   * notifUser updateMany
   */
  export type notifUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notifUsers.
     */
    data: XOR<notifUserUpdateManyMutationInput, notifUserUncheckedUpdateManyInput>
    /**
     * Filter which notifUsers to update
     */
    where?: notifUserWhereInput
  }

  /**
   * notifUser upsert
   */
  export type notifUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifUser
     */
    select?: notifUserSelect<ExtArgs> | null
    /**
     * The filter to search for the notifUser to update in case it exists.
     */
    where: notifUserWhereUniqueInput
    /**
     * In case the notifUser found by the `where` argument doesn't exist, create a new notifUser with this data.
     */
    create: XOR<notifUserCreateInput, notifUserUncheckedCreateInput>
    /**
     * In case the notifUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notifUserUpdateInput, notifUserUncheckedUpdateInput>
  }

  /**
   * notifUser delete
   */
  export type notifUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifUser
     */
    select?: notifUserSelect<ExtArgs> | null
    /**
     * Filter which notifUser to delete.
     */
    where: notifUserWhereUniqueInput
  }

  /**
   * notifUser deleteMany
   */
  export type notifUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifUsers to delete
     */
    where?: notifUserWhereInput
  }

  /**
   * notifUser without action
   */
  export type notifUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifUser
     */
    select?: notifUserSelect<ExtArgs> | null
  }


  /**
   * Model logUser
   */

  export type AggregateLogUser = {
    _count: LogUserCountAggregateOutputType | null
    _min: LogUserMinAggregateOutputType | null
    _max: LogUserMaxAggregateOutputType | null
  }

  export type LogUserMinAggregateOutputType = {
    id: string | null
    start: Date | null
    end: Date | null
    username: string | null
    userActivity: string | null
    activity: string | null
  }

  export type LogUserMaxAggregateOutputType = {
    id: string | null
    start: Date | null
    end: Date | null
    username: string | null
    userActivity: string | null
    activity: string | null
  }

  export type LogUserCountAggregateOutputType = {
    id: number
    start: number
    end: number
    username: number
    userActivity: number
    activity: number
    _all: number
  }


  export type LogUserMinAggregateInputType = {
    id?: true
    start?: true
    end?: true
    username?: true
    userActivity?: true
    activity?: true
  }

  export type LogUserMaxAggregateInputType = {
    id?: true
    start?: true
    end?: true
    username?: true
    userActivity?: true
    activity?: true
  }

  export type LogUserCountAggregateInputType = {
    id?: true
    start?: true
    end?: true
    username?: true
    userActivity?: true
    activity?: true
    _all?: true
  }

  export type LogUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logUser to aggregate.
     */
    where?: logUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logUsers to fetch.
     */
    orderBy?: logUserOrderByWithRelationInput | logUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: logUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned logUsers
    **/
    _count?: true | LogUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogUserMaxAggregateInputType
  }

  export type GetLogUserAggregateType<T extends LogUserAggregateArgs> = {
        [P in keyof T & keyof AggregateLogUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogUser[P]>
      : GetScalarType<T[P], AggregateLogUser[P]>
  }




  export type logUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: logUserWhereInput
    orderBy?: logUserOrderByWithAggregationInput | logUserOrderByWithAggregationInput[]
    by: LogUserScalarFieldEnum[] | LogUserScalarFieldEnum
    having?: logUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogUserCountAggregateInputType | true
    _min?: LogUserMinAggregateInputType
    _max?: LogUserMaxAggregateInputType
  }

  export type LogUserGroupByOutputType = {
    id: string
    start: Date
    end: Date | null
    username: string | null
    userActivity: string | null
    activity: string | null
    _count: LogUserCountAggregateOutputType | null
    _min: LogUserMinAggregateOutputType | null
    _max: LogUserMaxAggregateOutputType | null
  }

  type GetLogUserGroupByPayload<T extends logUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogUserGroupByOutputType[P]>
            : GetScalarType<T[P], LogUserGroupByOutputType[P]>
        }
      >
    >


  export type logUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    username?: boolean
    userActivity?: boolean
    activity?: boolean
  }, ExtArgs["result"]["logUser"]>

  export type logUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    username?: boolean
    userActivity?: boolean
    activity?: boolean
  }, ExtArgs["result"]["logUser"]>

  export type logUserSelectScalar = {
    id?: boolean
    start?: boolean
    end?: boolean
    username?: boolean
    userActivity?: boolean
    activity?: boolean
  }


  export type $logUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "logUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      start: Date
      end: Date | null
      username: string | null
      userActivity: string | null
      activity: string | null
    }, ExtArgs["result"]["logUser"]>
    composites: {}
  }

  type logUserGetPayload<S extends boolean | null | undefined | logUserDefaultArgs> = $Result.GetResult<Prisma.$logUserPayload, S>

  type logUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<logUserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LogUserCountAggregateInputType | true
    }

  export interface logUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['logUser'], meta: { name: 'logUser' } }
    /**
     * Find zero or one LogUser that matches the filter.
     * @param {logUserFindUniqueArgs} args - Arguments to find a LogUser
     * @example
     * // Get one LogUser
     * const logUser = await prisma.logUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends logUserFindUniqueArgs>(args: SelectSubset<T, logUserFindUniqueArgs<ExtArgs>>): Prisma__logUserClient<$Result.GetResult<Prisma.$logUserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LogUser that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {logUserFindUniqueOrThrowArgs} args - Arguments to find a LogUser
     * @example
     * // Get one LogUser
     * const logUser = await prisma.logUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends logUserFindUniqueOrThrowArgs>(args: SelectSubset<T, logUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__logUserClient<$Result.GetResult<Prisma.$logUserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LogUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logUserFindFirstArgs} args - Arguments to find a LogUser
     * @example
     * // Get one LogUser
     * const logUser = await prisma.logUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends logUserFindFirstArgs>(args?: SelectSubset<T, logUserFindFirstArgs<ExtArgs>>): Prisma__logUserClient<$Result.GetResult<Prisma.$logUserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LogUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logUserFindFirstOrThrowArgs} args - Arguments to find a LogUser
     * @example
     * // Get one LogUser
     * const logUser = await prisma.logUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends logUserFindFirstOrThrowArgs>(args?: SelectSubset<T, logUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__logUserClient<$Result.GetResult<Prisma.$logUserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LogUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LogUsers
     * const logUsers = await prisma.logUser.findMany()
     * 
     * // Get first 10 LogUsers
     * const logUsers = await prisma.logUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logUserWithIdOnly = await prisma.logUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends logUserFindManyArgs>(args?: SelectSubset<T, logUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logUserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LogUser.
     * @param {logUserCreateArgs} args - Arguments to create a LogUser.
     * @example
     * // Create one LogUser
     * const LogUser = await prisma.logUser.create({
     *   data: {
     *     // ... data to create a LogUser
     *   }
     * })
     * 
     */
    create<T extends logUserCreateArgs>(args: SelectSubset<T, logUserCreateArgs<ExtArgs>>): Prisma__logUserClient<$Result.GetResult<Prisma.$logUserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LogUsers.
     * @param {logUserCreateManyArgs} args - Arguments to create many LogUsers.
     * @example
     * // Create many LogUsers
     * const logUser = await prisma.logUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends logUserCreateManyArgs>(args?: SelectSubset<T, logUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LogUsers and returns the data saved in the database.
     * @param {logUserCreateManyAndReturnArgs} args - Arguments to create many LogUsers.
     * @example
     * // Create many LogUsers
     * const logUser = await prisma.logUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LogUsers and only return the `id`
     * const logUserWithIdOnly = await prisma.logUser.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends logUserCreateManyAndReturnArgs>(args?: SelectSubset<T, logUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logUserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LogUser.
     * @param {logUserDeleteArgs} args - Arguments to delete one LogUser.
     * @example
     * // Delete one LogUser
     * const LogUser = await prisma.logUser.delete({
     *   where: {
     *     // ... filter to delete one LogUser
     *   }
     * })
     * 
     */
    delete<T extends logUserDeleteArgs>(args: SelectSubset<T, logUserDeleteArgs<ExtArgs>>): Prisma__logUserClient<$Result.GetResult<Prisma.$logUserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LogUser.
     * @param {logUserUpdateArgs} args - Arguments to update one LogUser.
     * @example
     * // Update one LogUser
     * const logUser = await prisma.logUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends logUserUpdateArgs>(args: SelectSubset<T, logUserUpdateArgs<ExtArgs>>): Prisma__logUserClient<$Result.GetResult<Prisma.$logUserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LogUsers.
     * @param {logUserDeleteManyArgs} args - Arguments to filter LogUsers to delete.
     * @example
     * // Delete a few LogUsers
     * const { count } = await prisma.logUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends logUserDeleteManyArgs>(args?: SelectSubset<T, logUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LogUsers
     * const logUser = await prisma.logUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends logUserUpdateManyArgs>(args: SelectSubset<T, logUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LogUser.
     * @param {logUserUpsertArgs} args - Arguments to update or create a LogUser.
     * @example
     * // Update or create a LogUser
     * const logUser = await prisma.logUser.upsert({
     *   create: {
     *     // ... data to create a LogUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LogUser we want to update
     *   }
     * })
     */
    upsert<T extends logUserUpsertArgs>(args: SelectSubset<T, logUserUpsertArgs<ExtArgs>>): Prisma__logUserClient<$Result.GetResult<Prisma.$logUserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LogUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logUserCountArgs} args - Arguments to filter LogUsers to count.
     * @example
     * // Count the number of LogUsers
     * const count = await prisma.logUser.count({
     *   where: {
     *     // ... the filter for the LogUsers we want to count
     *   }
     * })
    **/
    count<T extends logUserCountArgs>(
      args?: Subset<T, logUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LogUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogUserAggregateArgs>(args: Subset<T, LogUserAggregateArgs>): Prisma.PrismaPromise<GetLogUserAggregateType<T>>

    /**
     * Group by LogUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logUserGroupByArgs} args - Group by arguments.
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
      T extends logUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: logUserGroupByArgs['orderBy'] }
        : { orderBy?: logUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, logUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the logUser model
   */
  readonly fields: logUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for logUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__logUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the logUser model
   */ 
  interface logUserFieldRefs {
    readonly id: FieldRef<"logUser", 'String'>
    readonly start: FieldRef<"logUser", 'DateTime'>
    readonly end: FieldRef<"logUser", 'DateTime'>
    readonly username: FieldRef<"logUser", 'String'>
    readonly userActivity: FieldRef<"logUser", 'String'>
    readonly activity: FieldRef<"logUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * logUser findUnique
   */
  export type logUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logUser
     */
    select?: logUserSelect<ExtArgs> | null
    /**
     * Filter, which logUser to fetch.
     */
    where: logUserWhereUniqueInput
  }

  /**
   * logUser findUniqueOrThrow
   */
  export type logUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logUser
     */
    select?: logUserSelect<ExtArgs> | null
    /**
     * Filter, which logUser to fetch.
     */
    where: logUserWhereUniqueInput
  }

  /**
   * logUser findFirst
   */
  export type logUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logUser
     */
    select?: logUserSelect<ExtArgs> | null
    /**
     * Filter, which logUser to fetch.
     */
    where?: logUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logUsers to fetch.
     */
    orderBy?: logUserOrderByWithRelationInput | logUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logUsers.
     */
    cursor?: logUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logUsers.
     */
    distinct?: LogUserScalarFieldEnum | LogUserScalarFieldEnum[]
  }

  /**
   * logUser findFirstOrThrow
   */
  export type logUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logUser
     */
    select?: logUserSelect<ExtArgs> | null
    /**
     * Filter, which logUser to fetch.
     */
    where?: logUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logUsers to fetch.
     */
    orderBy?: logUserOrderByWithRelationInput | logUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logUsers.
     */
    cursor?: logUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logUsers.
     */
    distinct?: LogUserScalarFieldEnum | LogUserScalarFieldEnum[]
  }

  /**
   * logUser findMany
   */
  export type logUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logUser
     */
    select?: logUserSelect<ExtArgs> | null
    /**
     * Filter, which logUsers to fetch.
     */
    where?: logUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logUsers to fetch.
     */
    orderBy?: logUserOrderByWithRelationInput | logUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing logUsers.
     */
    cursor?: logUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logUsers.
     */
    skip?: number
    distinct?: LogUserScalarFieldEnum | LogUserScalarFieldEnum[]
  }

  /**
   * logUser create
   */
  export type logUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logUser
     */
    select?: logUserSelect<ExtArgs> | null
    /**
     * The data needed to create a logUser.
     */
    data?: XOR<logUserCreateInput, logUserUncheckedCreateInput>
  }

  /**
   * logUser createMany
   */
  export type logUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many logUsers.
     */
    data: logUserCreateManyInput | logUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * logUser createManyAndReturn
   */
  export type logUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logUser
     */
    select?: logUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many logUsers.
     */
    data: logUserCreateManyInput | logUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * logUser update
   */
  export type logUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logUser
     */
    select?: logUserSelect<ExtArgs> | null
    /**
     * The data needed to update a logUser.
     */
    data: XOR<logUserUpdateInput, logUserUncheckedUpdateInput>
    /**
     * Choose, which logUser to update.
     */
    where: logUserWhereUniqueInput
  }

  /**
   * logUser updateMany
   */
  export type logUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update logUsers.
     */
    data: XOR<logUserUpdateManyMutationInput, logUserUncheckedUpdateManyInput>
    /**
     * Filter which logUsers to update
     */
    where?: logUserWhereInput
  }

  /**
   * logUser upsert
   */
  export type logUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logUser
     */
    select?: logUserSelect<ExtArgs> | null
    /**
     * The filter to search for the logUser to update in case it exists.
     */
    where: logUserWhereUniqueInput
    /**
     * In case the logUser found by the `where` argument doesn't exist, create a new logUser with this data.
     */
    create: XOR<logUserCreateInput, logUserUncheckedCreateInput>
    /**
     * In case the logUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<logUserUpdateInput, logUserUncheckedUpdateInput>
  }

  /**
   * logUser delete
   */
  export type logUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logUser
     */
    select?: logUserSelect<ExtArgs> | null
    /**
     * Filter which logUser to delete.
     */
    where: logUserWhereUniqueInput
  }

  /**
   * logUser deleteMany
   */
  export type logUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logUsers to delete
     */
    where?: logUserWhereInput
  }

  /**
   * logUser without action
   */
  export type logUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logUser
     */
    select?: logUserSelect<ExtArgs> | null
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


  export const GedungScalarFieldEnum: {
    id: 'id',
    start: 'start',
    end: 'end',
    nama: 'nama',
    alamat: 'alamat'
  };

  export type GedungScalarFieldEnum = (typeof GedungScalarFieldEnum)[keyof typeof GedungScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    start: 'start',
    end: 'end',
    namaBarang: 'namaBarang'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProdukGedungScalarFieldEnum: {
    id: 'id',
    start: 'start',
    end: 'end',
    produkId: 'produkId',
    gedungId: 'gedungId',
    stockBarang: 'stockBarang'
  };

  export type ProdukGedungScalarFieldEnum = (typeof ProdukGedungScalarFieldEnum)[keyof typeof ProdukGedungScalarFieldEnum]


  export const PendingProductScalarFieldEnum: {
    id: 'id',
    start: 'start',
    end: 'end',
    stockBarang: 'stockBarang',
    user: 'user',
    username: 'username',
    role: 'role',
    note: 'note',
    jenisBarang: 'jenisBarang',
    statusProduct: 'statusProduct',
    produkId: 'produkId',
    gedungId: 'gedungId'
  };

  export type PendingProductScalarFieldEnum = (typeof PendingProductScalarFieldEnum)[keyof typeof PendingProductScalarFieldEnum]


  export const NotifUserScalarFieldEnum: {
    id: 'id',
    start: 'start',
    end: 'end',
    username: 'username',
    namaBarang: 'namaBarang',
    jumlahBarang: 'jumlahBarang',
    note: 'note'
  };

  export type NotifUserScalarFieldEnum = (typeof NotifUserScalarFieldEnum)[keyof typeof NotifUserScalarFieldEnum]


  export const LogUserScalarFieldEnum: {
    id: 'id',
    start: 'start',
    end: 'end',
    username: 'username',
    userActivity: 'userActivity',
    activity: 'activity'
  };

  export type LogUserScalarFieldEnum = (typeof LogUserScalarFieldEnum)[keyof typeof LogUserScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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


  export type gedungWhereInput = {
    AND?: gedungWhereInput | gedungWhereInput[]
    OR?: gedungWhereInput[]
    NOT?: gedungWhereInput | gedungWhereInput[]
    id?: IntFilter<"gedung"> | number
    start?: DateTimeFilter<"gedung"> | Date | string
    end?: DateTimeNullableFilter<"gedung"> | Date | string | null
    nama?: StringNullableFilter<"gedung"> | string | null
    alamat?: StringNullableFilter<"gedung"> | string | null
    produk?: ProdukGedungListRelationFilter
  }

  export type gedungOrderByWithRelationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    nama?: SortOrderInput | SortOrder
    alamat?: SortOrderInput | SortOrder
    produk?: produkGedungOrderByRelationAggregateInput
  }

  export type gedungWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: gedungWhereInput | gedungWhereInput[]
    OR?: gedungWhereInput[]
    NOT?: gedungWhereInput | gedungWhereInput[]
    start?: DateTimeFilter<"gedung"> | Date | string
    end?: DateTimeNullableFilter<"gedung"> | Date | string | null
    nama?: StringNullableFilter<"gedung"> | string | null
    alamat?: StringNullableFilter<"gedung"> | string | null
    produk?: ProdukGedungListRelationFilter
  }, "id">

  export type gedungOrderByWithAggregationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    nama?: SortOrderInput | SortOrder
    alamat?: SortOrderInput | SortOrder
    _count?: gedungCountOrderByAggregateInput
    _avg?: gedungAvgOrderByAggregateInput
    _max?: gedungMaxOrderByAggregateInput
    _min?: gedungMinOrderByAggregateInput
    _sum?: gedungSumOrderByAggregateInput
  }

  export type gedungScalarWhereWithAggregatesInput = {
    AND?: gedungScalarWhereWithAggregatesInput | gedungScalarWhereWithAggregatesInput[]
    OR?: gedungScalarWhereWithAggregatesInput[]
    NOT?: gedungScalarWhereWithAggregatesInput | gedungScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"gedung"> | number
    start?: DateTimeWithAggregatesFilter<"gedung"> | Date | string
    end?: DateTimeNullableWithAggregatesFilter<"gedung"> | Date | string | null
    nama?: StringNullableWithAggregatesFilter<"gedung"> | string | null
    alamat?: StringNullableWithAggregatesFilter<"gedung"> | string | null
  }

  export type productWhereInput = {
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    id?: StringFilter<"product"> | string
    start?: DateTimeFilter<"product"> | Date | string
    end?: DateTimeNullableFilter<"product"> | Date | string | null
    namaBarang?: StringNullableFilter<"product"> | string | null
    produkGedung?: ProdukGedungListRelationFilter
    pendingProduct?: PendingProductListRelationFilter
  }

  export type productOrderByWithRelationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    namaBarang?: SortOrderInput | SortOrder
    produkGedung?: produkGedungOrderByRelationAggregateInput
    pendingProduct?: pendingProductOrderByRelationAggregateInput
  }

  export type productWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    start?: DateTimeFilter<"product"> | Date | string
    end?: DateTimeNullableFilter<"product"> | Date | string | null
    namaBarang?: StringNullableFilter<"product"> | string | null
    produkGedung?: ProdukGedungListRelationFilter
    pendingProduct?: PendingProductListRelationFilter
  }, "id">

  export type productOrderByWithAggregationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    namaBarang?: SortOrderInput | SortOrder
    _count?: productCountOrderByAggregateInput
    _max?: productMaxOrderByAggregateInput
    _min?: productMinOrderByAggregateInput
  }

  export type productScalarWhereWithAggregatesInput = {
    AND?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    OR?: productScalarWhereWithAggregatesInput[]
    NOT?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"product"> | string
    start?: DateTimeWithAggregatesFilter<"product"> | Date | string
    end?: DateTimeNullableWithAggregatesFilter<"product"> | Date | string | null
    namaBarang?: StringNullableWithAggregatesFilter<"product"> | string | null
  }

  export type produkGedungWhereInput = {
    AND?: produkGedungWhereInput | produkGedungWhereInput[]
    OR?: produkGedungWhereInput[]
    NOT?: produkGedungWhereInput | produkGedungWhereInput[]
    id?: StringFilter<"produkGedung"> | string
    start?: DateTimeFilter<"produkGedung"> | Date | string
    end?: DateTimeNullableFilter<"produkGedung"> | Date | string | null
    produkId?: StringFilter<"produkGedung"> | string
    gedungId?: IntFilter<"produkGedung"> | number
    stockBarang?: IntFilter<"produkGedung"> | number
    produk?: XOR<ProductRelationFilter, productWhereInput>
    gedung?: XOR<GedungRelationFilter, gedungWhereInput>
  }

  export type produkGedungOrderByWithRelationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    produkId?: SortOrder
    gedungId?: SortOrder
    stockBarang?: SortOrder
    produk?: productOrderByWithRelationInput
    gedung?: gedungOrderByWithRelationInput
  }

  export type produkGedungWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    produkId_gedungId?: produkGedungProdukIdGedungIdCompoundUniqueInput
    AND?: produkGedungWhereInput | produkGedungWhereInput[]
    OR?: produkGedungWhereInput[]
    NOT?: produkGedungWhereInput | produkGedungWhereInput[]
    start?: DateTimeFilter<"produkGedung"> | Date | string
    end?: DateTimeNullableFilter<"produkGedung"> | Date | string | null
    produkId?: StringFilter<"produkGedung"> | string
    gedungId?: IntFilter<"produkGedung"> | number
    stockBarang?: IntFilter<"produkGedung"> | number
    produk?: XOR<ProductRelationFilter, productWhereInput>
    gedung?: XOR<GedungRelationFilter, gedungWhereInput>
  }, "id" | "produkId_gedungId">

  export type produkGedungOrderByWithAggregationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    produkId?: SortOrder
    gedungId?: SortOrder
    stockBarang?: SortOrder
    _count?: produkGedungCountOrderByAggregateInput
    _avg?: produkGedungAvgOrderByAggregateInput
    _max?: produkGedungMaxOrderByAggregateInput
    _min?: produkGedungMinOrderByAggregateInput
    _sum?: produkGedungSumOrderByAggregateInput
  }

  export type produkGedungScalarWhereWithAggregatesInput = {
    AND?: produkGedungScalarWhereWithAggregatesInput | produkGedungScalarWhereWithAggregatesInput[]
    OR?: produkGedungScalarWhereWithAggregatesInput[]
    NOT?: produkGedungScalarWhereWithAggregatesInput | produkGedungScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"produkGedung"> | string
    start?: DateTimeWithAggregatesFilter<"produkGedung"> | Date | string
    end?: DateTimeNullableWithAggregatesFilter<"produkGedung"> | Date | string | null
    produkId?: StringWithAggregatesFilter<"produkGedung"> | string
    gedungId?: IntWithAggregatesFilter<"produkGedung"> | number
    stockBarang?: IntWithAggregatesFilter<"produkGedung"> | number
  }

  export type pendingProductWhereInput = {
    AND?: pendingProductWhereInput | pendingProductWhereInput[]
    OR?: pendingProductWhereInput[]
    NOT?: pendingProductWhereInput | pendingProductWhereInput[]
    id?: StringFilter<"pendingProduct"> | string
    start?: DateTimeFilter<"pendingProduct"> | Date | string
    end?: DateTimeNullableFilter<"pendingProduct"> | Date | string | null
    stockBarang?: IntFilter<"pendingProduct"> | number
    user?: StringNullableFilter<"pendingProduct"> | string | null
    username?: StringNullableFilter<"pendingProduct"> | string | null
    role?: StringNullableFilter<"pendingProduct"> | string | null
    note?: StringNullableFilter<"pendingProduct"> | string | null
    jenisBarang?: StringNullableFilter<"pendingProduct"> | string | null
    statusProduct?: BoolFilter<"pendingProduct"> | boolean
    produkId?: StringNullableFilter<"pendingProduct"> | string | null
    gedungId?: IntNullableFilter<"pendingProduct"> | number | null
    products?: ProductListRelationFilter
  }

  export type pendingProductOrderByWithRelationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    stockBarang?: SortOrder
    user?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    jenisBarang?: SortOrderInput | SortOrder
    statusProduct?: SortOrder
    produkId?: SortOrderInput | SortOrder
    gedungId?: SortOrderInput | SortOrder
    products?: productOrderByRelationAggregateInput
  }

  export type pendingProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: pendingProductWhereInput | pendingProductWhereInput[]
    OR?: pendingProductWhereInput[]
    NOT?: pendingProductWhereInput | pendingProductWhereInput[]
    start?: DateTimeFilter<"pendingProduct"> | Date | string
    end?: DateTimeNullableFilter<"pendingProduct"> | Date | string | null
    stockBarang?: IntFilter<"pendingProduct"> | number
    user?: StringNullableFilter<"pendingProduct"> | string | null
    username?: StringNullableFilter<"pendingProduct"> | string | null
    role?: StringNullableFilter<"pendingProduct"> | string | null
    note?: StringNullableFilter<"pendingProduct"> | string | null
    jenisBarang?: StringNullableFilter<"pendingProduct"> | string | null
    statusProduct?: BoolFilter<"pendingProduct"> | boolean
    produkId?: StringNullableFilter<"pendingProduct"> | string | null
    gedungId?: IntNullableFilter<"pendingProduct"> | number | null
    products?: ProductListRelationFilter
  }, "id">

  export type pendingProductOrderByWithAggregationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    stockBarang?: SortOrder
    user?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    jenisBarang?: SortOrderInput | SortOrder
    statusProduct?: SortOrder
    produkId?: SortOrderInput | SortOrder
    gedungId?: SortOrderInput | SortOrder
    _count?: pendingProductCountOrderByAggregateInput
    _avg?: pendingProductAvgOrderByAggregateInput
    _max?: pendingProductMaxOrderByAggregateInput
    _min?: pendingProductMinOrderByAggregateInput
    _sum?: pendingProductSumOrderByAggregateInput
  }

  export type pendingProductScalarWhereWithAggregatesInput = {
    AND?: pendingProductScalarWhereWithAggregatesInput | pendingProductScalarWhereWithAggregatesInput[]
    OR?: pendingProductScalarWhereWithAggregatesInput[]
    NOT?: pendingProductScalarWhereWithAggregatesInput | pendingProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"pendingProduct"> | string
    start?: DateTimeWithAggregatesFilter<"pendingProduct"> | Date | string
    end?: DateTimeNullableWithAggregatesFilter<"pendingProduct"> | Date | string | null
    stockBarang?: IntWithAggregatesFilter<"pendingProduct"> | number
    user?: StringNullableWithAggregatesFilter<"pendingProduct"> | string | null
    username?: StringNullableWithAggregatesFilter<"pendingProduct"> | string | null
    role?: StringNullableWithAggregatesFilter<"pendingProduct"> | string | null
    note?: StringNullableWithAggregatesFilter<"pendingProduct"> | string | null
    jenisBarang?: StringNullableWithAggregatesFilter<"pendingProduct"> | string | null
    statusProduct?: BoolWithAggregatesFilter<"pendingProduct"> | boolean
    produkId?: StringNullableWithAggregatesFilter<"pendingProduct"> | string | null
    gedungId?: IntNullableWithAggregatesFilter<"pendingProduct"> | number | null
  }

  export type notifUserWhereInput = {
    AND?: notifUserWhereInput | notifUserWhereInput[]
    OR?: notifUserWhereInput[]
    NOT?: notifUserWhereInput | notifUserWhereInput[]
    id?: StringFilter<"notifUser"> | string
    start?: DateTimeFilter<"notifUser"> | Date | string
    end?: DateTimeNullableFilter<"notifUser"> | Date | string | null
    username?: StringNullableFilter<"notifUser"> | string | null
    namaBarang?: StringNullableFilter<"notifUser"> | string | null
    jumlahBarang?: IntNullableFilter<"notifUser"> | number | null
    note?: StringNullableFilter<"notifUser"> | string | null
  }

  export type notifUserOrderByWithRelationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    namaBarang?: SortOrderInput | SortOrder
    jumlahBarang?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
  }

  export type notifUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: notifUserWhereInput | notifUserWhereInput[]
    OR?: notifUserWhereInput[]
    NOT?: notifUserWhereInput | notifUserWhereInput[]
    start?: DateTimeFilter<"notifUser"> | Date | string
    end?: DateTimeNullableFilter<"notifUser"> | Date | string | null
    username?: StringNullableFilter<"notifUser"> | string | null
    namaBarang?: StringNullableFilter<"notifUser"> | string | null
    jumlahBarang?: IntNullableFilter<"notifUser"> | number | null
    note?: StringNullableFilter<"notifUser"> | string | null
  }, "id">

  export type notifUserOrderByWithAggregationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    namaBarang?: SortOrderInput | SortOrder
    jumlahBarang?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    _count?: notifUserCountOrderByAggregateInput
    _avg?: notifUserAvgOrderByAggregateInput
    _max?: notifUserMaxOrderByAggregateInput
    _min?: notifUserMinOrderByAggregateInput
    _sum?: notifUserSumOrderByAggregateInput
  }

  export type notifUserScalarWhereWithAggregatesInput = {
    AND?: notifUserScalarWhereWithAggregatesInput | notifUserScalarWhereWithAggregatesInput[]
    OR?: notifUserScalarWhereWithAggregatesInput[]
    NOT?: notifUserScalarWhereWithAggregatesInput | notifUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"notifUser"> | string
    start?: DateTimeWithAggregatesFilter<"notifUser"> | Date | string
    end?: DateTimeNullableWithAggregatesFilter<"notifUser"> | Date | string | null
    username?: StringNullableWithAggregatesFilter<"notifUser"> | string | null
    namaBarang?: StringNullableWithAggregatesFilter<"notifUser"> | string | null
    jumlahBarang?: IntNullableWithAggregatesFilter<"notifUser"> | number | null
    note?: StringNullableWithAggregatesFilter<"notifUser"> | string | null
  }

  export type logUserWhereInput = {
    AND?: logUserWhereInput | logUserWhereInput[]
    OR?: logUserWhereInput[]
    NOT?: logUserWhereInput | logUserWhereInput[]
    id?: StringFilter<"logUser"> | string
    start?: DateTimeFilter<"logUser"> | Date | string
    end?: DateTimeNullableFilter<"logUser"> | Date | string | null
    username?: StringNullableFilter<"logUser"> | string | null
    userActivity?: StringNullableFilter<"logUser"> | string | null
    activity?: StringNullableFilter<"logUser"> | string | null
  }

  export type logUserOrderByWithRelationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    userActivity?: SortOrderInput | SortOrder
    activity?: SortOrderInput | SortOrder
  }

  export type logUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: logUserWhereInput | logUserWhereInput[]
    OR?: logUserWhereInput[]
    NOT?: logUserWhereInput | logUserWhereInput[]
    start?: DateTimeFilter<"logUser"> | Date | string
    end?: DateTimeNullableFilter<"logUser"> | Date | string | null
    username?: StringNullableFilter<"logUser"> | string | null
    userActivity?: StringNullableFilter<"logUser"> | string | null
    activity?: StringNullableFilter<"logUser"> | string | null
  }, "id">

  export type logUserOrderByWithAggregationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    userActivity?: SortOrderInput | SortOrder
    activity?: SortOrderInput | SortOrder
    _count?: logUserCountOrderByAggregateInput
    _max?: logUserMaxOrderByAggregateInput
    _min?: logUserMinOrderByAggregateInput
  }

  export type logUserScalarWhereWithAggregatesInput = {
    AND?: logUserScalarWhereWithAggregatesInput | logUserScalarWhereWithAggregatesInput[]
    OR?: logUserScalarWhereWithAggregatesInput[]
    NOT?: logUserScalarWhereWithAggregatesInput | logUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"logUser"> | string
    start?: DateTimeWithAggregatesFilter<"logUser"> | Date | string
    end?: DateTimeNullableWithAggregatesFilter<"logUser"> | Date | string | null
    username?: StringNullableWithAggregatesFilter<"logUser"> | string | null
    userActivity?: StringNullableWithAggregatesFilter<"logUser"> | string | null
    activity?: StringNullableWithAggregatesFilter<"logUser"> | string | null
  }

  export type gedungCreateInput = {
    id?: number
    start?: Date | string
    end?: Date | string | null
    nama?: string | null
    alamat?: string | null
    produk?: produkGedungCreateNestedManyWithoutGedungInput
  }

  export type gedungUncheckedCreateInput = {
    id?: number
    start?: Date | string
    end?: Date | string | null
    nama?: string | null
    alamat?: string | null
    produk?: produkGedungUncheckedCreateNestedManyWithoutGedungInput
  }

  export type gedungUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    produk?: produkGedungUpdateManyWithoutGedungNestedInput
  }

  export type gedungUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    produk?: produkGedungUncheckedUpdateManyWithoutGedungNestedInput
  }

  export type gedungCreateManyInput = {
    id?: number
    start?: Date | string
    end?: Date | string | null
    nama?: string | null
    alamat?: string | null
  }

  export type gedungUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type gedungUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productCreateInput = {
    id?: string
    start?: Date | string
    end?: Date | string | null
    namaBarang?: string | null
    produkGedung?: produkGedungCreateNestedManyWithoutProdukInput
    pendingProduct?: pendingProductCreateNestedManyWithoutProductsInput
  }

  export type productUncheckedCreateInput = {
    id?: string
    start?: Date | string
    end?: Date | string | null
    namaBarang?: string | null
    produkGedung?: produkGedungUncheckedCreateNestedManyWithoutProdukInput
    pendingProduct?: pendingProductUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    namaBarang?: NullableStringFieldUpdateOperationsInput | string | null
    produkGedung?: produkGedungUpdateManyWithoutProdukNestedInput
    pendingProduct?: pendingProductUpdateManyWithoutProductsNestedInput
  }

  export type productUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    namaBarang?: NullableStringFieldUpdateOperationsInput | string | null
    produkGedung?: produkGedungUncheckedUpdateManyWithoutProdukNestedInput
    pendingProduct?: pendingProductUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productCreateManyInput = {
    id?: string
    start?: Date | string
    end?: Date | string | null
    namaBarang?: string | null
  }

  export type productUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    namaBarang?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    namaBarang?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produkGedungCreateInput = {
    id?: string
    start?: Date | string
    end?: Date | string | null
    stockBarang?: number
    produk: productCreateNestedOneWithoutProdukGedungInput
    gedung: gedungCreateNestedOneWithoutProdukInput
  }

  export type produkGedungUncheckedCreateInput = {
    id?: string
    start?: Date | string
    end?: Date | string | null
    produkId: string
    gedungId: number
    stockBarang?: number
  }

  export type produkGedungUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stockBarang?: IntFieldUpdateOperationsInput | number
    produk?: productUpdateOneRequiredWithoutProdukGedungNestedInput
    gedung?: gedungUpdateOneRequiredWithoutProdukNestedInput
  }

  export type produkGedungUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    produkId?: StringFieldUpdateOperationsInput | string
    gedungId?: IntFieldUpdateOperationsInput | number
    stockBarang?: IntFieldUpdateOperationsInput | number
  }

  export type produkGedungCreateManyInput = {
    id?: string
    start?: Date | string
    end?: Date | string | null
    produkId: string
    gedungId: number
    stockBarang?: number
  }

  export type produkGedungUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stockBarang?: IntFieldUpdateOperationsInput | number
  }

  export type produkGedungUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    produkId?: StringFieldUpdateOperationsInput | string
    gedungId?: IntFieldUpdateOperationsInput | number
    stockBarang?: IntFieldUpdateOperationsInput | number
  }

  export type pendingProductCreateInput = {
    id?: string
    start?: Date | string
    end?: Date | string | null
    stockBarang?: number
    user?: string | null
    username?: string | null
    role?: string | null
    note?: string | null
    jenisBarang?: string | null
    statusProduct?: boolean
    produkId?: string | null
    gedungId?: number | null
    products?: productCreateNestedManyWithoutPendingProductInput
  }

  export type pendingProductUncheckedCreateInput = {
    id?: string
    start?: Date | string
    end?: Date | string | null
    stockBarang?: number
    user?: string | null
    username?: string | null
    role?: string | null
    note?: string | null
    jenisBarang?: string | null
    statusProduct?: boolean
    produkId?: string | null
    gedungId?: number | null
    products?: productUncheckedCreateNestedManyWithoutPendingProductInput
  }

  export type pendingProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stockBarang?: IntFieldUpdateOperationsInput | number
    user?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    jenisBarang?: NullableStringFieldUpdateOperationsInput | string | null
    statusProduct?: BoolFieldUpdateOperationsInput | boolean
    produkId?: NullableStringFieldUpdateOperationsInput | string | null
    gedungId?: NullableIntFieldUpdateOperationsInput | number | null
    products?: productUpdateManyWithoutPendingProductNestedInput
  }

  export type pendingProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stockBarang?: IntFieldUpdateOperationsInput | number
    user?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    jenisBarang?: NullableStringFieldUpdateOperationsInput | string | null
    statusProduct?: BoolFieldUpdateOperationsInput | boolean
    produkId?: NullableStringFieldUpdateOperationsInput | string | null
    gedungId?: NullableIntFieldUpdateOperationsInput | number | null
    products?: productUncheckedUpdateManyWithoutPendingProductNestedInput
  }

  export type pendingProductCreateManyInput = {
    id?: string
    start?: Date | string
    end?: Date | string | null
    stockBarang?: number
    user?: string | null
    username?: string | null
    role?: string | null
    note?: string | null
    jenisBarang?: string | null
    statusProduct?: boolean
    produkId?: string | null
    gedungId?: number | null
  }

  export type pendingProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stockBarang?: IntFieldUpdateOperationsInput | number
    user?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    jenisBarang?: NullableStringFieldUpdateOperationsInput | string | null
    statusProduct?: BoolFieldUpdateOperationsInput | boolean
    produkId?: NullableStringFieldUpdateOperationsInput | string | null
    gedungId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type pendingProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stockBarang?: IntFieldUpdateOperationsInput | number
    user?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    jenisBarang?: NullableStringFieldUpdateOperationsInput | string | null
    statusProduct?: BoolFieldUpdateOperationsInput | boolean
    produkId?: NullableStringFieldUpdateOperationsInput | string | null
    gedungId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type notifUserCreateInput = {
    id?: string
    start?: Date | string
    end?: Date | string | null
    username?: string | null
    namaBarang?: string | null
    jumlahBarang?: number | null
    note?: string | null
  }

  export type notifUserUncheckedCreateInput = {
    id?: string
    start?: Date | string
    end?: Date | string | null
    username?: string | null
    namaBarang?: string | null
    jumlahBarang?: number | null
    note?: string | null
  }

  export type notifUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    namaBarang?: NullableStringFieldUpdateOperationsInput | string | null
    jumlahBarang?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type notifUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    namaBarang?: NullableStringFieldUpdateOperationsInput | string | null
    jumlahBarang?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type notifUserCreateManyInput = {
    id?: string
    start?: Date | string
    end?: Date | string | null
    username?: string | null
    namaBarang?: string | null
    jumlahBarang?: number | null
    note?: string | null
  }

  export type notifUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    namaBarang?: NullableStringFieldUpdateOperationsInput | string | null
    jumlahBarang?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type notifUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    namaBarang?: NullableStringFieldUpdateOperationsInput | string | null
    jumlahBarang?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type logUserCreateInput = {
    id?: string
    start?: Date | string
    end?: Date | string | null
    username?: string | null
    userActivity?: string | null
    activity?: string | null
  }

  export type logUserUncheckedCreateInput = {
    id?: string
    start?: Date | string
    end?: Date | string | null
    username?: string | null
    userActivity?: string | null
    activity?: string | null
  }

  export type logUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    userActivity?: NullableStringFieldUpdateOperationsInput | string | null
    activity?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type logUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    userActivity?: NullableStringFieldUpdateOperationsInput | string | null
    activity?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type logUserCreateManyInput = {
    id?: string
    start?: Date | string
    end?: Date | string | null
    username?: string | null
    userActivity?: string | null
    activity?: string | null
  }

  export type logUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    userActivity?: NullableStringFieldUpdateOperationsInput | string | null
    activity?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type logUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    userActivity?: NullableStringFieldUpdateOperationsInput | string | null
    activity?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type ProdukGedungListRelationFilter = {
    every?: produkGedungWhereInput
    some?: produkGedungWhereInput
    none?: produkGedungWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type produkGedungOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type gedungCountOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
  }

  export type gedungAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type gedungMaxOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
  }

  export type gedungMinOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
  }

  export type gedungSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type PendingProductListRelationFilter = {
    every?: pendingProductWhereInput
    some?: pendingProductWhereInput
    none?: pendingProductWhereInput
  }

  export type pendingProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productCountOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    namaBarang?: SortOrder
  }

  export type productMaxOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    namaBarang?: SortOrder
  }

  export type productMinOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    namaBarang?: SortOrder
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

  export type ProductRelationFilter = {
    is?: productWhereInput
    isNot?: productWhereInput
  }

  export type GedungRelationFilter = {
    is?: gedungWhereInput
    isNot?: gedungWhereInput
  }

  export type produkGedungProdukIdGedungIdCompoundUniqueInput = {
    produkId: string
    gedungId: number
  }

  export type produkGedungCountOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    produkId?: SortOrder
    gedungId?: SortOrder
    stockBarang?: SortOrder
  }

  export type produkGedungAvgOrderByAggregateInput = {
    gedungId?: SortOrder
    stockBarang?: SortOrder
  }

  export type produkGedungMaxOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    produkId?: SortOrder
    gedungId?: SortOrder
    stockBarang?: SortOrder
  }

  export type produkGedungMinOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    produkId?: SortOrder
    gedungId?: SortOrder
    stockBarang?: SortOrder
  }

  export type produkGedungSumOrderByAggregateInput = {
    gedungId?: SortOrder
    stockBarang?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ProductListRelationFilter = {
    every?: productWhereInput
    some?: productWhereInput
    none?: productWhereInput
  }

  export type productOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pendingProductCountOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    stockBarang?: SortOrder
    user?: SortOrder
    username?: SortOrder
    role?: SortOrder
    note?: SortOrder
    jenisBarang?: SortOrder
    statusProduct?: SortOrder
    produkId?: SortOrder
    gedungId?: SortOrder
  }

  export type pendingProductAvgOrderByAggregateInput = {
    stockBarang?: SortOrder
    gedungId?: SortOrder
  }

  export type pendingProductMaxOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    stockBarang?: SortOrder
    user?: SortOrder
    username?: SortOrder
    role?: SortOrder
    note?: SortOrder
    jenisBarang?: SortOrder
    statusProduct?: SortOrder
    produkId?: SortOrder
    gedungId?: SortOrder
  }

  export type pendingProductMinOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    stockBarang?: SortOrder
    user?: SortOrder
    username?: SortOrder
    role?: SortOrder
    note?: SortOrder
    jenisBarang?: SortOrder
    statusProduct?: SortOrder
    produkId?: SortOrder
    gedungId?: SortOrder
  }

  export type pendingProductSumOrderByAggregateInput = {
    stockBarang?: SortOrder
    gedungId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type notifUserCountOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    username?: SortOrder
    namaBarang?: SortOrder
    jumlahBarang?: SortOrder
    note?: SortOrder
  }

  export type notifUserAvgOrderByAggregateInput = {
    jumlahBarang?: SortOrder
  }

  export type notifUserMaxOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    username?: SortOrder
    namaBarang?: SortOrder
    jumlahBarang?: SortOrder
    note?: SortOrder
  }

  export type notifUserMinOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    username?: SortOrder
    namaBarang?: SortOrder
    jumlahBarang?: SortOrder
    note?: SortOrder
  }

  export type notifUserSumOrderByAggregateInput = {
    jumlahBarang?: SortOrder
  }

  export type logUserCountOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    username?: SortOrder
    userActivity?: SortOrder
    activity?: SortOrder
  }

  export type logUserMaxOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    username?: SortOrder
    userActivity?: SortOrder
    activity?: SortOrder
  }

  export type logUserMinOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    username?: SortOrder
    userActivity?: SortOrder
    activity?: SortOrder
  }

  export type produkGedungCreateNestedManyWithoutGedungInput = {
    create?: XOR<produkGedungCreateWithoutGedungInput, produkGedungUncheckedCreateWithoutGedungInput> | produkGedungCreateWithoutGedungInput[] | produkGedungUncheckedCreateWithoutGedungInput[]
    connectOrCreate?: produkGedungCreateOrConnectWithoutGedungInput | produkGedungCreateOrConnectWithoutGedungInput[]
    createMany?: produkGedungCreateManyGedungInputEnvelope
    connect?: produkGedungWhereUniqueInput | produkGedungWhereUniqueInput[]
  }

  export type produkGedungUncheckedCreateNestedManyWithoutGedungInput = {
    create?: XOR<produkGedungCreateWithoutGedungInput, produkGedungUncheckedCreateWithoutGedungInput> | produkGedungCreateWithoutGedungInput[] | produkGedungUncheckedCreateWithoutGedungInput[]
    connectOrCreate?: produkGedungCreateOrConnectWithoutGedungInput | produkGedungCreateOrConnectWithoutGedungInput[]
    createMany?: produkGedungCreateManyGedungInputEnvelope
    connect?: produkGedungWhereUniqueInput | produkGedungWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type produkGedungUpdateManyWithoutGedungNestedInput = {
    create?: XOR<produkGedungCreateWithoutGedungInput, produkGedungUncheckedCreateWithoutGedungInput> | produkGedungCreateWithoutGedungInput[] | produkGedungUncheckedCreateWithoutGedungInput[]
    connectOrCreate?: produkGedungCreateOrConnectWithoutGedungInput | produkGedungCreateOrConnectWithoutGedungInput[]
    upsert?: produkGedungUpsertWithWhereUniqueWithoutGedungInput | produkGedungUpsertWithWhereUniqueWithoutGedungInput[]
    createMany?: produkGedungCreateManyGedungInputEnvelope
    set?: produkGedungWhereUniqueInput | produkGedungWhereUniqueInput[]
    disconnect?: produkGedungWhereUniqueInput | produkGedungWhereUniqueInput[]
    delete?: produkGedungWhereUniqueInput | produkGedungWhereUniqueInput[]
    connect?: produkGedungWhereUniqueInput | produkGedungWhereUniqueInput[]
    update?: produkGedungUpdateWithWhereUniqueWithoutGedungInput | produkGedungUpdateWithWhereUniqueWithoutGedungInput[]
    updateMany?: produkGedungUpdateManyWithWhereWithoutGedungInput | produkGedungUpdateManyWithWhereWithoutGedungInput[]
    deleteMany?: produkGedungScalarWhereInput | produkGedungScalarWhereInput[]
  }

  export type produkGedungUncheckedUpdateManyWithoutGedungNestedInput = {
    create?: XOR<produkGedungCreateWithoutGedungInput, produkGedungUncheckedCreateWithoutGedungInput> | produkGedungCreateWithoutGedungInput[] | produkGedungUncheckedCreateWithoutGedungInput[]
    connectOrCreate?: produkGedungCreateOrConnectWithoutGedungInput | produkGedungCreateOrConnectWithoutGedungInput[]
    upsert?: produkGedungUpsertWithWhereUniqueWithoutGedungInput | produkGedungUpsertWithWhereUniqueWithoutGedungInput[]
    createMany?: produkGedungCreateManyGedungInputEnvelope
    set?: produkGedungWhereUniqueInput | produkGedungWhereUniqueInput[]
    disconnect?: produkGedungWhereUniqueInput | produkGedungWhereUniqueInput[]
    delete?: produkGedungWhereUniqueInput | produkGedungWhereUniqueInput[]
    connect?: produkGedungWhereUniqueInput | produkGedungWhereUniqueInput[]
    update?: produkGedungUpdateWithWhereUniqueWithoutGedungInput | produkGedungUpdateWithWhereUniqueWithoutGedungInput[]
    updateMany?: produkGedungUpdateManyWithWhereWithoutGedungInput | produkGedungUpdateManyWithWhereWithoutGedungInput[]
    deleteMany?: produkGedungScalarWhereInput | produkGedungScalarWhereInput[]
  }

  export type produkGedungCreateNestedManyWithoutProdukInput = {
    create?: XOR<produkGedungCreateWithoutProdukInput, produkGedungUncheckedCreateWithoutProdukInput> | produkGedungCreateWithoutProdukInput[] | produkGedungUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: produkGedungCreateOrConnectWithoutProdukInput | produkGedungCreateOrConnectWithoutProdukInput[]
    createMany?: produkGedungCreateManyProdukInputEnvelope
    connect?: produkGedungWhereUniqueInput | produkGedungWhereUniqueInput[]
  }

  export type pendingProductCreateNestedManyWithoutProductsInput = {
    create?: XOR<pendingProductCreateWithoutProductsInput, pendingProductUncheckedCreateWithoutProductsInput> | pendingProductCreateWithoutProductsInput[] | pendingProductUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: pendingProductCreateOrConnectWithoutProductsInput | pendingProductCreateOrConnectWithoutProductsInput[]
    connect?: pendingProductWhereUniqueInput | pendingProductWhereUniqueInput[]
  }

  export type produkGedungUncheckedCreateNestedManyWithoutProdukInput = {
    create?: XOR<produkGedungCreateWithoutProdukInput, produkGedungUncheckedCreateWithoutProdukInput> | produkGedungCreateWithoutProdukInput[] | produkGedungUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: produkGedungCreateOrConnectWithoutProdukInput | produkGedungCreateOrConnectWithoutProdukInput[]
    createMany?: produkGedungCreateManyProdukInputEnvelope
    connect?: produkGedungWhereUniqueInput | produkGedungWhereUniqueInput[]
  }

  export type pendingProductUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<pendingProductCreateWithoutProductsInput, pendingProductUncheckedCreateWithoutProductsInput> | pendingProductCreateWithoutProductsInput[] | pendingProductUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: pendingProductCreateOrConnectWithoutProductsInput | pendingProductCreateOrConnectWithoutProductsInput[]
    connect?: pendingProductWhereUniqueInput | pendingProductWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type produkGedungUpdateManyWithoutProdukNestedInput = {
    create?: XOR<produkGedungCreateWithoutProdukInput, produkGedungUncheckedCreateWithoutProdukInput> | produkGedungCreateWithoutProdukInput[] | produkGedungUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: produkGedungCreateOrConnectWithoutProdukInput | produkGedungCreateOrConnectWithoutProdukInput[]
    upsert?: produkGedungUpsertWithWhereUniqueWithoutProdukInput | produkGedungUpsertWithWhereUniqueWithoutProdukInput[]
    createMany?: produkGedungCreateManyProdukInputEnvelope
    set?: produkGedungWhereUniqueInput | produkGedungWhereUniqueInput[]
    disconnect?: produkGedungWhereUniqueInput | produkGedungWhereUniqueInput[]
    delete?: produkGedungWhereUniqueInput | produkGedungWhereUniqueInput[]
    connect?: produkGedungWhereUniqueInput | produkGedungWhereUniqueInput[]
    update?: produkGedungUpdateWithWhereUniqueWithoutProdukInput | produkGedungUpdateWithWhereUniqueWithoutProdukInput[]
    updateMany?: produkGedungUpdateManyWithWhereWithoutProdukInput | produkGedungUpdateManyWithWhereWithoutProdukInput[]
    deleteMany?: produkGedungScalarWhereInput | produkGedungScalarWhereInput[]
  }

  export type pendingProductUpdateManyWithoutProductsNestedInput = {
    create?: XOR<pendingProductCreateWithoutProductsInput, pendingProductUncheckedCreateWithoutProductsInput> | pendingProductCreateWithoutProductsInput[] | pendingProductUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: pendingProductCreateOrConnectWithoutProductsInput | pendingProductCreateOrConnectWithoutProductsInput[]
    upsert?: pendingProductUpsertWithWhereUniqueWithoutProductsInput | pendingProductUpsertWithWhereUniqueWithoutProductsInput[]
    set?: pendingProductWhereUniqueInput | pendingProductWhereUniqueInput[]
    disconnect?: pendingProductWhereUniqueInput | pendingProductWhereUniqueInput[]
    delete?: pendingProductWhereUniqueInput | pendingProductWhereUniqueInput[]
    connect?: pendingProductWhereUniqueInput | pendingProductWhereUniqueInput[]
    update?: pendingProductUpdateWithWhereUniqueWithoutProductsInput | pendingProductUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: pendingProductUpdateManyWithWhereWithoutProductsInput | pendingProductUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: pendingProductScalarWhereInput | pendingProductScalarWhereInput[]
  }

  export type produkGedungUncheckedUpdateManyWithoutProdukNestedInput = {
    create?: XOR<produkGedungCreateWithoutProdukInput, produkGedungUncheckedCreateWithoutProdukInput> | produkGedungCreateWithoutProdukInput[] | produkGedungUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: produkGedungCreateOrConnectWithoutProdukInput | produkGedungCreateOrConnectWithoutProdukInput[]
    upsert?: produkGedungUpsertWithWhereUniqueWithoutProdukInput | produkGedungUpsertWithWhereUniqueWithoutProdukInput[]
    createMany?: produkGedungCreateManyProdukInputEnvelope
    set?: produkGedungWhereUniqueInput | produkGedungWhereUniqueInput[]
    disconnect?: produkGedungWhereUniqueInput | produkGedungWhereUniqueInput[]
    delete?: produkGedungWhereUniqueInput | produkGedungWhereUniqueInput[]
    connect?: produkGedungWhereUniqueInput | produkGedungWhereUniqueInput[]
    update?: produkGedungUpdateWithWhereUniqueWithoutProdukInput | produkGedungUpdateWithWhereUniqueWithoutProdukInput[]
    updateMany?: produkGedungUpdateManyWithWhereWithoutProdukInput | produkGedungUpdateManyWithWhereWithoutProdukInput[]
    deleteMany?: produkGedungScalarWhereInput | produkGedungScalarWhereInput[]
  }

  export type pendingProductUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<pendingProductCreateWithoutProductsInput, pendingProductUncheckedCreateWithoutProductsInput> | pendingProductCreateWithoutProductsInput[] | pendingProductUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: pendingProductCreateOrConnectWithoutProductsInput | pendingProductCreateOrConnectWithoutProductsInput[]
    upsert?: pendingProductUpsertWithWhereUniqueWithoutProductsInput | pendingProductUpsertWithWhereUniqueWithoutProductsInput[]
    set?: pendingProductWhereUniqueInput | pendingProductWhereUniqueInput[]
    disconnect?: pendingProductWhereUniqueInput | pendingProductWhereUniqueInput[]
    delete?: pendingProductWhereUniqueInput | pendingProductWhereUniqueInput[]
    connect?: pendingProductWhereUniqueInput | pendingProductWhereUniqueInput[]
    update?: pendingProductUpdateWithWhereUniqueWithoutProductsInput | pendingProductUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: pendingProductUpdateManyWithWhereWithoutProductsInput | pendingProductUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: pendingProductScalarWhereInput | pendingProductScalarWhereInput[]
  }

  export type productCreateNestedOneWithoutProdukGedungInput = {
    create?: XOR<productCreateWithoutProdukGedungInput, productUncheckedCreateWithoutProdukGedungInput>
    connectOrCreate?: productCreateOrConnectWithoutProdukGedungInput
    connect?: productWhereUniqueInput
  }

  export type gedungCreateNestedOneWithoutProdukInput = {
    create?: XOR<gedungCreateWithoutProdukInput, gedungUncheckedCreateWithoutProdukInput>
    connectOrCreate?: gedungCreateOrConnectWithoutProdukInput
    connect?: gedungWhereUniqueInput
  }

  export type productUpdateOneRequiredWithoutProdukGedungNestedInput = {
    create?: XOR<productCreateWithoutProdukGedungInput, productUncheckedCreateWithoutProdukGedungInput>
    connectOrCreate?: productCreateOrConnectWithoutProdukGedungInput
    upsert?: productUpsertWithoutProdukGedungInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutProdukGedungInput, productUpdateWithoutProdukGedungInput>, productUncheckedUpdateWithoutProdukGedungInput>
  }

  export type gedungUpdateOneRequiredWithoutProdukNestedInput = {
    create?: XOR<gedungCreateWithoutProdukInput, gedungUncheckedCreateWithoutProdukInput>
    connectOrCreate?: gedungCreateOrConnectWithoutProdukInput
    upsert?: gedungUpsertWithoutProdukInput
    connect?: gedungWhereUniqueInput
    update?: XOR<XOR<gedungUpdateToOneWithWhereWithoutProdukInput, gedungUpdateWithoutProdukInput>, gedungUncheckedUpdateWithoutProdukInput>
  }

  export type productCreateNestedManyWithoutPendingProductInput = {
    create?: XOR<productCreateWithoutPendingProductInput, productUncheckedCreateWithoutPendingProductInput> | productCreateWithoutPendingProductInput[] | productUncheckedCreateWithoutPendingProductInput[]
    connectOrCreate?: productCreateOrConnectWithoutPendingProductInput | productCreateOrConnectWithoutPendingProductInput[]
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
  }

  export type productUncheckedCreateNestedManyWithoutPendingProductInput = {
    create?: XOR<productCreateWithoutPendingProductInput, productUncheckedCreateWithoutPendingProductInput> | productCreateWithoutPendingProductInput[] | productUncheckedCreateWithoutPendingProductInput[]
    connectOrCreate?: productCreateOrConnectWithoutPendingProductInput | productCreateOrConnectWithoutPendingProductInput[]
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type productUpdateManyWithoutPendingProductNestedInput = {
    create?: XOR<productCreateWithoutPendingProductInput, productUncheckedCreateWithoutPendingProductInput> | productCreateWithoutPendingProductInput[] | productUncheckedCreateWithoutPendingProductInput[]
    connectOrCreate?: productCreateOrConnectWithoutPendingProductInput | productCreateOrConnectWithoutPendingProductInput[]
    upsert?: productUpsertWithWhereUniqueWithoutPendingProductInput | productUpsertWithWhereUniqueWithoutPendingProductInput[]
    set?: productWhereUniqueInput | productWhereUniqueInput[]
    disconnect?: productWhereUniqueInput | productWhereUniqueInput[]
    delete?: productWhereUniqueInput | productWhereUniqueInput[]
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
    update?: productUpdateWithWhereUniqueWithoutPendingProductInput | productUpdateWithWhereUniqueWithoutPendingProductInput[]
    updateMany?: productUpdateManyWithWhereWithoutPendingProductInput | productUpdateManyWithWhereWithoutPendingProductInput[]
    deleteMany?: productScalarWhereInput | productScalarWhereInput[]
  }

  export type productUncheckedUpdateManyWithoutPendingProductNestedInput = {
    create?: XOR<productCreateWithoutPendingProductInput, productUncheckedCreateWithoutPendingProductInput> | productCreateWithoutPendingProductInput[] | productUncheckedCreateWithoutPendingProductInput[]
    connectOrCreate?: productCreateOrConnectWithoutPendingProductInput | productCreateOrConnectWithoutPendingProductInput[]
    upsert?: productUpsertWithWhereUniqueWithoutPendingProductInput | productUpsertWithWhereUniqueWithoutPendingProductInput[]
    set?: productWhereUniqueInput | productWhereUniqueInput[]
    disconnect?: productWhereUniqueInput | productWhereUniqueInput[]
    delete?: productWhereUniqueInput | productWhereUniqueInput[]
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
    update?: productUpdateWithWhereUniqueWithoutPendingProductInput | productUpdateWithWhereUniqueWithoutPendingProductInput[]
    updateMany?: productUpdateManyWithWhereWithoutPendingProductInput | productUpdateManyWithWhereWithoutPendingProductInput[]
    deleteMany?: productScalarWhereInput | productScalarWhereInput[]
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type produkGedungCreateWithoutGedungInput = {
    id?: string
    start?: Date | string
    end?: Date | string | null
    stockBarang?: number
    produk: productCreateNestedOneWithoutProdukGedungInput
  }

  export type produkGedungUncheckedCreateWithoutGedungInput = {
    id?: string
    start?: Date | string
    end?: Date | string | null
    produkId: string
    stockBarang?: number
  }

  export type produkGedungCreateOrConnectWithoutGedungInput = {
    where: produkGedungWhereUniqueInput
    create: XOR<produkGedungCreateWithoutGedungInput, produkGedungUncheckedCreateWithoutGedungInput>
  }

  export type produkGedungCreateManyGedungInputEnvelope = {
    data: produkGedungCreateManyGedungInput | produkGedungCreateManyGedungInput[]
    skipDuplicates?: boolean
  }

  export type produkGedungUpsertWithWhereUniqueWithoutGedungInput = {
    where: produkGedungWhereUniqueInput
    update: XOR<produkGedungUpdateWithoutGedungInput, produkGedungUncheckedUpdateWithoutGedungInput>
    create: XOR<produkGedungCreateWithoutGedungInput, produkGedungUncheckedCreateWithoutGedungInput>
  }

  export type produkGedungUpdateWithWhereUniqueWithoutGedungInput = {
    where: produkGedungWhereUniqueInput
    data: XOR<produkGedungUpdateWithoutGedungInput, produkGedungUncheckedUpdateWithoutGedungInput>
  }

  export type produkGedungUpdateManyWithWhereWithoutGedungInput = {
    where: produkGedungScalarWhereInput
    data: XOR<produkGedungUpdateManyMutationInput, produkGedungUncheckedUpdateManyWithoutGedungInput>
  }

  export type produkGedungScalarWhereInput = {
    AND?: produkGedungScalarWhereInput | produkGedungScalarWhereInput[]
    OR?: produkGedungScalarWhereInput[]
    NOT?: produkGedungScalarWhereInput | produkGedungScalarWhereInput[]
    id?: StringFilter<"produkGedung"> | string
    start?: DateTimeFilter<"produkGedung"> | Date | string
    end?: DateTimeNullableFilter<"produkGedung"> | Date | string | null
    produkId?: StringFilter<"produkGedung"> | string
    gedungId?: IntFilter<"produkGedung"> | number
    stockBarang?: IntFilter<"produkGedung"> | number
  }

  export type produkGedungCreateWithoutProdukInput = {
    id?: string
    start?: Date | string
    end?: Date | string | null
    stockBarang?: number
    gedung: gedungCreateNestedOneWithoutProdukInput
  }

  export type produkGedungUncheckedCreateWithoutProdukInput = {
    id?: string
    start?: Date | string
    end?: Date | string | null
    gedungId: number
    stockBarang?: number
  }

  export type produkGedungCreateOrConnectWithoutProdukInput = {
    where: produkGedungWhereUniqueInput
    create: XOR<produkGedungCreateWithoutProdukInput, produkGedungUncheckedCreateWithoutProdukInput>
  }

  export type produkGedungCreateManyProdukInputEnvelope = {
    data: produkGedungCreateManyProdukInput | produkGedungCreateManyProdukInput[]
    skipDuplicates?: boolean
  }

  export type pendingProductCreateWithoutProductsInput = {
    id?: string
    start?: Date | string
    end?: Date | string | null
    stockBarang?: number
    user?: string | null
    username?: string | null
    role?: string | null
    note?: string | null
    jenisBarang?: string | null
    statusProduct?: boolean
    produkId?: string | null
    gedungId?: number | null
  }

  export type pendingProductUncheckedCreateWithoutProductsInput = {
    id?: string
    start?: Date | string
    end?: Date | string | null
    stockBarang?: number
    user?: string | null
    username?: string | null
    role?: string | null
    note?: string | null
    jenisBarang?: string | null
    statusProduct?: boolean
    produkId?: string | null
    gedungId?: number | null
  }

  export type pendingProductCreateOrConnectWithoutProductsInput = {
    where: pendingProductWhereUniqueInput
    create: XOR<pendingProductCreateWithoutProductsInput, pendingProductUncheckedCreateWithoutProductsInput>
  }

  export type produkGedungUpsertWithWhereUniqueWithoutProdukInput = {
    where: produkGedungWhereUniqueInput
    update: XOR<produkGedungUpdateWithoutProdukInput, produkGedungUncheckedUpdateWithoutProdukInput>
    create: XOR<produkGedungCreateWithoutProdukInput, produkGedungUncheckedCreateWithoutProdukInput>
  }

  export type produkGedungUpdateWithWhereUniqueWithoutProdukInput = {
    where: produkGedungWhereUniqueInput
    data: XOR<produkGedungUpdateWithoutProdukInput, produkGedungUncheckedUpdateWithoutProdukInput>
  }

  export type produkGedungUpdateManyWithWhereWithoutProdukInput = {
    where: produkGedungScalarWhereInput
    data: XOR<produkGedungUpdateManyMutationInput, produkGedungUncheckedUpdateManyWithoutProdukInput>
  }

  export type pendingProductUpsertWithWhereUniqueWithoutProductsInput = {
    where: pendingProductWhereUniqueInput
    update: XOR<pendingProductUpdateWithoutProductsInput, pendingProductUncheckedUpdateWithoutProductsInput>
    create: XOR<pendingProductCreateWithoutProductsInput, pendingProductUncheckedCreateWithoutProductsInput>
  }

  export type pendingProductUpdateWithWhereUniqueWithoutProductsInput = {
    where: pendingProductWhereUniqueInput
    data: XOR<pendingProductUpdateWithoutProductsInput, pendingProductUncheckedUpdateWithoutProductsInput>
  }

  export type pendingProductUpdateManyWithWhereWithoutProductsInput = {
    where: pendingProductScalarWhereInput
    data: XOR<pendingProductUpdateManyMutationInput, pendingProductUncheckedUpdateManyWithoutProductsInput>
  }

  export type pendingProductScalarWhereInput = {
    AND?: pendingProductScalarWhereInput | pendingProductScalarWhereInput[]
    OR?: pendingProductScalarWhereInput[]
    NOT?: pendingProductScalarWhereInput | pendingProductScalarWhereInput[]
    id?: StringFilter<"pendingProduct"> | string
    start?: DateTimeFilter<"pendingProduct"> | Date | string
    end?: DateTimeNullableFilter<"pendingProduct"> | Date | string | null
    stockBarang?: IntFilter<"pendingProduct"> | number
    user?: StringNullableFilter<"pendingProduct"> | string | null
    username?: StringNullableFilter<"pendingProduct"> | string | null
    role?: StringNullableFilter<"pendingProduct"> | string | null
    note?: StringNullableFilter<"pendingProduct"> | string | null
    jenisBarang?: StringNullableFilter<"pendingProduct"> | string | null
    statusProduct?: BoolFilter<"pendingProduct"> | boolean
    produkId?: StringNullableFilter<"pendingProduct"> | string | null
    gedungId?: IntNullableFilter<"pendingProduct"> | number | null
  }

  export type productCreateWithoutProdukGedungInput = {
    id?: string
    start?: Date | string
    end?: Date | string | null
    namaBarang?: string | null
    pendingProduct?: pendingProductCreateNestedManyWithoutProductsInput
  }

  export type productUncheckedCreateWithoutProdukGedungInput = {
    id?: string
    start?: Date | string
    end?: Date | string | null
    namaBarang?: string | null
    pendingProduct?: pendingProductUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productCreateOrConnectWithoutProdukGedungInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutProdukGedungInput, productUncheckedCreateWithoutProdukGedungInput>
  }

  export type gedungCreateWithoutProdukInput = {
    id?: number
    start?: Date | string
    end?: Date | string | null
    nama?: string | null
    alamat?: string | null
  }

  export type gedungUncheckedCreateWithoutProdukInput = {
    id?: number
    start?: Date | string
    end?: Date | string | null
    nama?: string | null
    alamat?: string | null
  }

  export type gedungCreateOrConnectWithoutProdukInput = {
    where: gedungWhereUniqueInput
    create: XOR<gedungCreateWithoutProdukInput, gedungUncheckedCreateWithoutProdukInput>
  }

  export type productUpsertWithoutProdukGedungInput = {
    update: XOR<productUpdateWithoutProdukGedungInput, productUncheckedUpdateWithoutProdukGedungInput>
    create: XOR<productCreateWithoutProdukGedungInput, productUncheckedCreateWithoutProdukGedungInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutProdukGedungInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutProdukGedungInput, productUncheckedUpdateWithoutProdukGedungInput>
  }

  export type productUpdateWithoutProdukGedungInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    namaBarang?: NullableStringFieldUpdateOperationsInput | string | null
    pendingProduct?: pendingProductUpdateManyWithoutProductsNestedInput
  }

  export type productUncheckedUpdateWithoutProdukGedungInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    namaBarang?: NullableStringFieldUpdateOperationsInput | string | null
    pendingProduct?: pendingProductUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type gedungUpsertWithoutProdukInput = {
    update: XOR<gedungUpdateWithoutProdukInput, gedungUncheckedUpdateWithoutProdukInput>
    create: XOR<gedungCreateWithoutProdukInput, gedungUncheckedCreateWithoutProdukInput>
    where?: gedungWhereInput
  }

  export type gedungUpdateToOneWithWhereWithoutProdukInput = {
    where?: gedungWhereInput
    data: XOR<gedungUpdateWithoutProdukInput, gedungUncheckedUpdateWithoutProdukInput>
  }

  export type gedungUpdateWithoutProdukInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type gedungUncheckedUpdateWithoutProdukInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productCreateWithoutPendingProductInput = {
    id?: string
    start?: Date | string
    end?: Date | string | null
    namaBarang?: string | null
    produkGedung?: produkGedungCreateNestedManyWithoutProdukInput
  }

  export type productUncheckedCreateWithoutPendingProductInput = {
    id?: string
    start?: Date | string
    end?: Date | string | null
    namaBarang?: string | null
    produkGedung?: produkGedungUncheckedCreateNestedManyWithoutProdukInput
  }

  export type productCreateOrConnectWithoutPendingProductInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutPendingProductInput, productUncheckedCreateWithoutPendingProductInput>
  }

  export type productUpsertWithWhereUniqueWithoutPendingProductInput = {
    where: productWhereUniqueInput
    update: XOR<productUpdateWithoutPendingProductInput, productUncheckedUpdateWithoutPendingProductInput>
    create: XOR<productCreateWithoutPendingProductInput, productUncheckedCreateWithoutPendingProductInput>
  }

  export type productUpdateWithWhereUniqueWithoutPendingProductInput = {
    where: productWhereUniqueInput
    data: XOR<productUpdateWithoutPendingProductInput, productUncheckedUpdateWithoutPendingProductInput>
  }

  export type productUpdateManyWithWhereWithoutPendingProductInput = {
    where: productScalarWhereInput
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyWithoutPendingProductInput>
  }

  export type productScalarWhereInput = {
    AND?: productScalarWhereInput | productScalarWhereInput[]
    OR?: productScalarWhereInput[]
    NOT?: productScalarWhereInput | productScalarWhereInput[]
    id?: StringFilter<"product"> | string
    start?: DateTimeFilter<"product"> | Date | string
    end?: DateTimeNullableFilter<"product"> | Date | string | null
    namaBarang?: StringNullableFilter<"product"> | string | null
  }

  export type produkGedungCreateManyGedungInput = {
    id?: string
    start?: Date | string
    end?: Date | string | null
    produkId: string
    stockBarang?: number
  }

  export type produkGedungUpdateWithoutGedungInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stockBarang?: IntFieldUpdateOperationsInput | number
    produk?: productUpdateOneRequiredWithoutProdukGedungNestedInput
  }

  export type produkGedungUncheckedUpdateWithoutGedungInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    produkId?: StringFieldUpdateOperationsInput | string
    stockBarang?: IntFieldUpdateOperationsInput | number
  }

  export type produkGedungUncheckedUpdateManyWithoutGedungInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    produkId?: StringFieldUpdateOperationsInput | string
    stockBarang?: IntFieldUpdateOperationsInput | number
  }

  export type produkGedungCreateManyProdukInput = {
    id?: string
    start?: Date | string
    end?: Date | string | null
    gedungId: number
    stockBarang?: number
  }

  export type produkGedungUpdateWithoutProdukInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stockBarang?: IntFieldUpdateOperationsInput | number
    gedung?: gedungUpdateOneRequiredWithoutProdukNestedInput
  }

  export type produkGedungUncheckedUpdateWithoutProdukInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gedungId?: IntFieldUpdateOperationsInput | number
    stockBarang?: IntFieldUpdateOperationsInput | number
  }

  export type produkGedungUncheckedUpdateManyWithoutProdukInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gedungId?: IntFieldUpdateOperationsInput | number
    stockBarang?: IntFieldUpdateOperationsInput | number
  }

  export type pendingProductUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stockBarang?: IntFieldUpdateOperationsInput | number
    user?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    jenisBarang?: NullableStringFieldUpdateOperationsInput | string | null
    statusProduct?: BoolFieldUpdateOperationsInput | boolean
    produkId?: NullableStringFieldUpdateOperationsInput | string | null
    gedungId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type pendingProductUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stockBarang?: IntFieldUpdateOperationsInput | number
    user?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    jenisBarang?: NullableStringFieldUpdateOperationsInput | string | null
    statusProduct?: BoolFieldUpdateOperationsInput | boolean
    produkId?: NullableStringFieldUpdateOperationsInput | string | null
    gedungId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type pendingProductUncheckedUpdateManyWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stockBarang?: IntFieldUpdateOperationsInput | number
    user?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    jenisBarang?: NullableStringFieldUpdateOperationsInput | string | null
    statusProduct?: BoolFieldUpdateOperationsInput | boolean
    produkId?: NullableStringFieldUpdateOperationsInput | string | null
    gedungId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type productUpdateWithoutPendingProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    namaBarang?: NullableStringFieldUpdateOperationsInput | string | null
    produkGedung?: produkGedungUpdateManyWithoutProdukNestedInput
  }

  export type productUncheckedUpdateWithoutPendingProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    namaBarang?: NullableStringFieldUpdateOperationsInput | string | null
    produkGedung?: produkGedungUncheckedUpdateManyWithoutProdukNestedInput
  }

  export type productUncheckedUpdateManyWithoutPendingProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    namaBarang?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use GedungCountOutputTypeDefaultArgs instead
     */
    export type GedungCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GedungCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PendingProductCountOutputTypeDefaultArgs instead
     */
    export type PendingProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PendingProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use gedungDefaultArgs instead
     */
    export type gedungArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = gedungDefaultArgs<ExtArgs>
    /**
     * @deprecated Use productDefaultArgs instead
     */
    export type productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = productDefaultArgs<ExtArgs>
    /**
     * @deprecated Use produkGedungDefaultArgs instead
     */
    export type produkGedungArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = produkGedungDefaultArgs<ExtArgs>
    /**
     * @deprecated Use pendingProductDefaultArgs instead
     */
    export type pendingProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = pendingProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use notifUserDefaultArgs instead
     */
    export type notifUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = notifUserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use logUserDefaultArgs instead
     */
    export type logUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = logUserDefaultArgs<ExtArgs>

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