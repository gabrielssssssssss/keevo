
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
 * Model Authentification
 * 
 */
export type Authentification = $Result.DefaultSelection<Prisma.$AuthentificationPayload>
/**
 * Model Seedphrase
 * 
 */
export type Seedphrase = $Result.DefaultSelection<Prisma.$SeedphrasePayload>
/**
 * Model VaultItem
 * 
 */
export type VaultItem = $Result.DefaultSelection<Prisma.$VaultItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const VaultType: {
  PASSWORD: 'PASSWORD',
  PASSKEY: 'PASSKEY',
  SECURE_NOTE: 'SECURE_NOTE',
  CREDIT_CARD: 'CREDIT_CARD',
  CONTACT_INFO: 'CONTACT_INFO',
  DOCUMENT: 'DOCUMENT',
  SHARED_ITEM: 'SHARED_ITEM'
};

export type VaultType = (typeof VaultType)[keyof typeof VaultType]

}

export type VaultType = $Enums.VaultType

export const VaultType: typeof $Enums.VaultType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Authentifications
 * const authentifications = await prisma.authentification.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Authentifications
   * const authentifications = await prisma.authentification.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.authentification`: Exposes CRUD operations for the **Authentification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authentifications
    * const authentifications = await prisma.authentification.findMany()
    * ```
    */
  get authentification(): Prisma.AuthentificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seedphrase`: Exposes CRUD operations for the **Seedphrase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seedphrases
    * const seedphrases = await prisma.seedphrase.findMany()
    * ```
    */
  get seedphrase(): Prisma.SeedphraseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vaultItem`: Exposes CRUD operations for the **VaultItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VaultItems
    * const vaultItems = await prisma.vaultItem.findMany()
    * ```
    */
  get vaultItem(): Prisma.VaultItemDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Authentification: 'Authentification',
    Seedphrase: 'Seedphrase',
    VaultItem: 'VaultItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "authentification" | "seedphrase" | "vaultItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Authentification: {
        payload: Prisma.$AuthentificationPayload<ExtArgs>
        fields: Prisma.AuthentificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthentificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthentificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthentificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthentificationPayload>
          }
          findFirst: {
            args: Prisma.AuthentificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthentificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthentificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthentificationPayload>
          }
          findMany: {
            args: Prisma.AuthentificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthentificationPayload>[]
          }
          create: {
            args: Prisma.AuthentificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthentificationPayload>
          }
          createMany: {
            args: Prisma.AuthentificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthentificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthentificationPayload>[]
          }
          delete: {
            args: Prisma.AuthentificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthentificationPayload>
          }
          update: {
            args: Prisma.AuthentificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthentificationPayload>
          }
          deleteMany: {
            args: Prisma.AuthentificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthentificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthentificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthentificationPayload>[]
          }
          upsert: {
            args: Prisma.AuthentificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthentificationPayload>
          }
          aggregate: {
            args: Prisma.AuthentificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthentification>
          }
          groupBy: {
            args: Prisma.AuthentificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthentificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthentificationCountArgs<ExtArgs>
            result: $Utils.Optional<AuthentificationCountAggregateOutputType> | number
          }
        }
      }
      Seedphrase: {
        payload: Prisma.$SeedphrasePayload<ExtArgs>
        fields: Prisma.SeedphraseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeedphraseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedphrasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeedphraseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedphrasePayload>
          }
          findFirst: {
            args: Prisma.SeedphraseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedphrasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeedphraseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedphrasePayload>
          }
          findMany: {
            args: Prisma.SeedphraseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedphrasePayload>[]
          }
          create: {
            args: Prisma.SeedphraseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedphrasePayload>
          }
          createMany: {
            args: Prisma.SeedphraseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeedphraseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedphrasePayload>[]
          }
          delete: {
            args: Prisma.SeedphraseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedphrasePayload>
          }
          update: {
            args: Prisma.SeedphraseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedphrasePayload>
          }
          deleteMany: {
            args: Prisma.SeedphraseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeedphraseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeedphraseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedphrasePayload>[]
          }
          upsert: {
            args: Prisma.SeedphraseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedphrasePayload>
          }
          aggregate: {
            args: Prisma.SeedphraseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeedphrase>
          }
          groupBy: {
            args: Prisma.SeedphraseGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeedphraseGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeedphraseCountArgs<ExtArgs>
            result: $Utils.Optional<SeedphraseCountAggregateOutputType> | number
          }
        }
      }
      VaultItem: {
        payload: Prisma.$VaultItemPayload<ExtArgs>
        fields: Prisma.VaultItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VaultItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VaultItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultItemPayload>
          }
          findFirst: {
            args: Prisma.VaultItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VaultItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultItemPayload>
          }
          findMany: {
            args: Prisma.VaultItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultItemPayload>[]
          }
          create: {
            args: Prisma.VaultItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultItemPayload>
          }
          createMany: {
            args: Prisma.VaultItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VaultItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultItemPayload>[]
          }
          delete: {
            args: Prisma.VaultItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultItemPayload>
          }
          update: {
            args: Prisma.VaultItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultItemPayload>
          }
          deleteMany: {
            args: Prisma.VaultItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VaultItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VaultItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultItemPayload>[]
          }
          upsert: {
            args: Prisma.VaultItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultItemPayload>
          }
          aggregate: {
            args: Prisma.VaultItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVaultItem>
          }
          groupBy: {
            args: Prisma.VaultItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<VaultItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.VaultItemCountArgs<ExtArgs>
            result: $Utils.Optional<VaultItemCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    authentification?: AuthentificationOmit
    seedphrase?: SeedphraseOmit
    vaultItem?: VaultItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Models
   */

  /**
   * Model Authentification
   */

  export type AggregateAuthentification = {
    _count: AuthentificationCountAggregateOutputType | null
    _min: AuthentificationMinAggregateOutputType | null
    _max: AuthentificationMaxAggregateOutputType | null
  }

  export type AuthentificationMinAggregateOutputType = {
    id: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthentificationMaxAggregateOutputType = {
    id: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthentificationCountAggregateOutputType = {
    id: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AuthentificationMinAggregateInputType = {
    id?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthentificationMaxAggregateInputType = {
    id?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthentificationCountAggregateInputType = {
    id?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AuthentificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authentification to aggregate.
     */
    where?: AuthentificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authentifications to fetch.
     */
    orderBy?: AuthentificationOrderByWithRelationInput | AuthentificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthentificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authentifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authentifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Authentifications
    **/
    _count?: true | AuthentificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthentificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthentificationMaxAggregateInputType
  }

  export type GetAuthentificationAggregateType<T extends AuthentificationAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthentification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthentification[P]>
      : GetScalarType<T[P], AggregateAuthentification[P]>
  }




  export type AuthentificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthentificationWhereInput
    orderBy?: AuthentificationOrderByWithAggregationInput | AuthentificationOrderByWithAggregationInput[]
    by: AuthentificationScalarFieldEnum[] | AuthentificationScalarFieldEnum
    having?: AuthentificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthentificationCountAggregateInputType | true
    _min?: AuthentificationMinAggregateInputType
    _max?: AuthentificationMaxAggregateInputType
  }

  export type AuthentificationGroupByOutputType = {
    id: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: AuthentificationCountAggregateOutputType | null
    _min: AuthentificationMinAggregateOutputType | null
    _max: AuthentificationMaxAggregateOutputType | null
  }

  type GetAuthentificationGroupByPayload<T extends AuthentificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthentificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthentificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthentificationGroupByOutputType[P]>
            : GetScalarType<T[P], AuthentificationGroupByOutputType[P]>
        }
      >
    >


  export type AuthentificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["authentification"]>

  export type AuthentificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["authentification"]>

  export type AuthentificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["authentification"]>

  export type AuthentificationSelectScalar = {
    id?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AuthentificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["authentification"]>

  export type $AuthentificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Authentification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["authentification"]>
    composites: {}
  }

  type AuthentificationGetPayload<S extends boolean | null | undefined | AuthentificationDefaultArgs> = $Result.GetResult<Prisma.$AuthentificationPayload, S>

  type AuthentificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthentificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthentificationCountAggregateInputType | true
    }

  export interface AuthentificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Authentification'], meta: { name: 'Authentification' } }
    /**
     * Find zero or one Authentification that matches the filter.
     * @param {AuthentificationFindUniqueArgs} args - Arguments to find a Authentification
     * @example
     * // Get one Authentification
     * const authentification = await prisma.authentification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthentificationFindUniqueArgs>(args: SelectSubset<T, AuthentificationFindUniqueArgs<ExtArgs>>): Prisma__AuthentificationClient<$Result.GetResult<Prisma.$AuthentificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Authentification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthentificationFindUniqueOrThrowArgs} args - Arguments to find a Authentification
     * @example
     * // Get one Authentification
     * const authentification = await prisma.authentification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthentificationFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthentificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthentificationClient<$Result.GetResult<Prisma.$AuthentificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authentification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthentificationFindFirstArgs} args - Arguments to find a Authentification
     * @example
     * // Get one Authentification
     * const authentification = await prisma.authentification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthentificationFindFirstArgs>(args?: SelectSubset<T, AuthentificationFindFirstArgs<ExtArgs>>): Prisma__AuthentificationClient<$Result.GetResult<Prisma.$AuthentificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authentification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthentificationFindFirstOrThrowArgs} args - Arguments to find a Authentification
     * @example
     * // Get one Authentification
     * const authentification = await prisma.authentification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthentificationFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthentificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthentificationClient<$Result.GetResult<Prisma.$AuthentificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Authentifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthentificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authentifications
     * const authentifications = await prisma.authentification.findMany()
     * 
     * // Get first 10 Authentifications
     * const authentifications = await prisma.authentification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authentificationWithIdOnly = await prisma.authentification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthentificationFindManyArgs>(args?: SelectSubset<T, AuthentificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthentificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Authentification.
     * @param {AuthentificationCreateArgs} args - Arguments to create a Authentification.
     * @example
     * // Create one Authentification
     * const Authentification = await prisma.authentification.create({
     *   data: {
     *     // ... data to create a Authentification
     *   }
     * })
     * 
     */
    create<T extends AuthentificationCreateArgs>(args: SelectSubset<T, AuthentificationCreateArgs<ExtArgs>>): Prisma__AuthentificationClient<$Result.GetResult<Prisma.$AuthentificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Authentifications.
     * @param {AuthentificationCreateManyArgs} args - Arguments to create many Authentifications.
     * @example
     * // Create many Authentifications
     * const authentification = await prisma.authentification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthentificationCreateManyArgs>(args?: SelectSubset<T, AuthentificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Authentifications and returns the data saved in the database.
     * @param {AuthentificationCreateManyAndReturnArgs} args - Arguments to create many Authentifications.
     * @example
     * // Create many Authentifications
     * const authentification = await prisma.authentification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Authentifications and only return the `id`
     * const authentificationWithIdOnly = await prisma.authentification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthentificationCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthentificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthentificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Authentification.
     * @param {AuthentificationDeleteArgs} args - Arguments to delete one Authentification.
     * @example
     * // Delete one Authentification
     * const Authentification = await prisma.authentification.delete({
     *   where: {
     *     // ... filter to delete one Authentification
     *   }
     * })
     * 
     */
    delete<T extends AuthentificationDeleteArgs>(args: SelectSubset<T, AuthentificationDeleteArgs<ExtArgs>>): Prisma__AuthentificationClient<$Result.GetResult<Prisma.$AuthentificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Authentification.
     * @param {AuthentificationUpdateArgs} args - Arguments to update one Authentification.
     * @example
     * // Update one Authentification
     * const authentification = await prisma.authentification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthentificationUpdateArgs>(args: SelectSubset<T, AuthentificationUpdateArgs<ExtArgs>>): Prisma__AuthentificationClient<$Result.GetResult<Prisma.$AuthentificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Authentifications.
     * @param {AuthentificationDeleteManyArgs} args - Arguments to filter Authentifications to delete.
     * @example
     * // Delete a few Authentifications
     * const { count } = await prisma.authentification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthentificationDeleteManyArgs>(args?: SelectSubset<T, AuthentificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authentifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthentificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authentifications
     * const authentification = await prisma.authentification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthentificationUpdateManyArgs>(args: SelectSubset<T, AuthentificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authentifications and returns the data updated in the database.
     * @param {AuthentificationUpdateManyAndReturnArgs} args - Arguments to update many Authentifications.
     * @example
     * // Update many Authentifications
     * const authentification = await prisma.authentification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Authentifications and only return the `id`
     * const authentificationWithIdOnly = await prisma.authentification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuthentificationUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthentificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthentificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Authentification.
     * @param {AuthentificationUpsertArgs} args - Arguments to update or create a Authentification.
     * @example
     * // Update or create a Authentification
     * const authentification = await prisma.authentification.upsert({
     *   create: {
     *     // ... data to create a Authentification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Authentification we want to update
     *   }
     * })
     */
    upsert<T extends AuthentificationUpsertArgs>(args: SelectSubset<T, AuthentificationUpsertArgs<ExtArgs>>): Prisma__AuthentificationClient<$Result.GetResult<Prisma.$AuthentificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Authentifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthentificationCountArgs} args - Arguments to filter Authentifications to count.
     * @example
     * // Count the number of Authentifications
     * const count = await prisma.authentification.count({
     *   where: {
     *     // ... the filter for the Authentifications we want to count
     *   }
     * })
    **/
    count<T extends AuthentificationCountArgs>(
      args?: Subset<T, AuthentificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthentificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Authentification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthentificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthentificationAggregateArgs>(args: Subset<T, AuthentificationAggregateArgs>): Prisma.PrismaPromise<GetAuthentificationAggregateType<T>>

    /**
     * Group by Authentification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthentificationGroupByArgs} args - Group by arguments.
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
      T extends AuthentificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthentificationGroupByArgs['orderBy'] }
        : { orderBy?: AuthentificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuthentificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthentificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Authentification model
   */
  readonly fields: AuthentificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Authentification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthentificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Authentification model
   */
  interface AuthentificationFieldRefs {
    readonly id: FieldRef<"Authentification", 'String'>
    readonly password: FieldRef<"Authentification", 'String'>
    readonly createdAt: FieldRef<"Authentification", 'DateTime'>
    readonly updatedAt: FieldRef<"Authentification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Authentification findUnique
   */
  export type AuthentificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authentification
     */
    select?: AuthentificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authentification
     */
    omit?: AuthentificationOmit<ExtArgs> | null
    /**
     * Filter, which Authentification to fetch.
     */
    where: AuthentificationWhereUniqueInput
  }

  /**
   * Authentification findUniqueOrThrow
   */
  export type AuthentificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authentification
     */
    select?: AuthentificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authentification
     */
    omit?: AuthentificationOmit<ExtArgs> | null
    /**
     * Filter, which Authentification to fetch.
     */
    where: AuthentificationWhereUniqueInput
  }

  /**
   * Authentification findFirst
   */
  export type AuthentificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authentification
     */
    select?: AuthentificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authentification
     */
    omit?: AuthentificationOmit<ExtArgs> | null
    /**
     * Filter, which Authentification to fetch.
     */
    where?: AuthentificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authentifications to fetch.
     */
    orderBy?: AuthentificationOrderByWithRelationInput | AuthentificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authentifications.
     */
    cursor?: AuthentificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authentifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authentifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authentifications.
     */
    distinct?: AuthentificationScalarFieldEnum | AuthentificationScalarFieldEnum[]
  }

  /**
   * Authentification findFirstOrThrow
   */
  export type AuthentificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authentification
     */
    select?: AuthentificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authentification
     */
    omit?: AuthentificationOmit<ExtArgs> | null
    /**
     * Filter, which Authentification to fetch.
     */
    where?: AuthentificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authentifications to fetch.
     */
    orderBy?: AuthentificationOrderByWithRelationInput | AuthentificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authentifications.
     */
    cursor?: AuthentificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authentifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authentifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authentifications.
     */
    distinct?: AuthentificationScalarFieldEnum | AuthentificationScalarFieldEnum[]
  }

  /**
   * Authentification findMany
   */
  export type AuthentificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authentification
     */
    select?: AuthentificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authentification
     */
    omit?: AuthentificationOmit<ExtArgs> | null
    /**
     * Filter, which Authentifications to fetch.
     */
    where?: AuthentificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authentifications to fetch.
     */
    orderBy?: AuthentificationOrderByWithRelationInput | AuthentificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Authentifications.
     */
    cursor?: AuthentificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authentifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authentifications.
     */
    skip?: number
    distinct?: AuthentificationScalarFieldEnum | AuthentificationScalarFieldEnum[]
  }

  /**
   * Authentification create
   */
  export type AuthentificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authentification
     */
    select?: AuthentificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authentification
     */
    omit?: AuthentificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Authentification.
     */
    data: XOR<AuthentificationCreateInput, AuthentificationUncheckedCreateInput>
  }

  /**
   * Authentification createMany
   */
  export type AuthentificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Authentifications.
     */
    data: AuthentificationCreateManyInput | AuthentificationCreateManyInput[]
  }

  /**
   * Authentification createManyAndReturn
   */
  export type AuthentificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authentification
     */
    select?: AuthentificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Authentification
     */
    omit?: AuthentificationOmit<ExtArgs> | null
    /**
     * The data used to create many Authentifications.
     */
    data: AuthentificationCreateManyInput | AuthentificationCreateManyInput[]
  }

  /**
   * Authentification update
   */
  export type AuthentificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authentification
     */
    select?: AuthentificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authentification
     */
    omit?: AuthentificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Authentification.
     */
    data: XOR<AuthentificationUpdateInput, AuthentificationUncheckedUpdateInput>
    /**
     * Choose, which Authentification to update.
     */
    where: AuthentificationWhereUniqueInput
  }

  /**
   * Authentification updateMany
   */
  export type AuthentificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Authentifications.
     */
    data: XOR<AuthentificationUpdateManyMutationInput, AuthentificationUncheckedUpdateManyInput>
    /**
     * Filter which Authentifications to update
     */
    where?: AuthentificationWhereInput
    /**
     * Limit how many Authentifications to update.
     */
    limit?: number
  }

  /**
   * Authentification updateManyAndReturn
   */
  export type AuthentificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authentification
     */
    select?: AuthentificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Authentification
     */
    omit?: AuthentificationOmit<ExtArgs> | null
    /**
     * The data used to update Authentifications.
     */
    data: XOR<AuthentificationUpdateManyMutationInput, AuthentificationUncheckedUpdateManyInput>
    /**
     * Filter which Authentifications to update
     */
    where?: AuthentificationWhereInput
    /**
     * Limit how many Authentifications to update.
     */
    limit?: number
  }

  /**
   * Authentification upsert
   */
  export type AuthentificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authentification
     */
    select?: AuthentificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authentification
     */
    omit?: AuthentificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Authentification to update in case it exists.
     */
    where: AuthentificationWhereUniqueInput
    /**
     * In case the Authentification found by the `where` argument doesn't exist, create a new Authentification with this data.
     */
    create: XOR<AuthentificationCreateInput, AuthentificationUncheckedCreateInput>
    /**
     * In case the Authentification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthentificationUpdateInput, AuthentificationUncheckedUpdateInput>
  }

  /**
   * Authentification delete
   */
  export type AuthentificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authentification
     */
    select?: AuthentificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authentification
     */
    omit?: AuthentificationOmit<ExtArgs> | null
    /**
     * Filter which Authentification to delete.
     */
    where: AuthentificationWhereUniqueInput
  }

  /**
   * Authentification deleteMany
   */
  export type AuthentificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authentifications to delete
     */
    where?: AuthentificationWhereInput
    /**
     * Limit how many Authentifications to delete.
     */
    limit?: number
  }

  /**
   * Authentification without action
   */
  export type AuthentificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authentification
     */
    select?: AuthentificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authentification
     */
    omit?: AuthentificationOmit<ExtArgs> | null
  }


  /**
   * Model Seedphrase
   */

  export type AggregateSeedphrase = {
    _count: SeedphraseCountAggregateOutputType | null
    _min: SeedphraseMinAggregateOutputType | null
    _max: SeedphraseMaxAggregateOutputType | null
  }

  export type SeedphraseMinAggregateOutputType = {
    id: string | null
    seedHash: string | null
    createdAt: Date | null
  }

  export type SeedphraseMaxAggregateOutputType = {
    id: string | null
    seedHash: string | null
    createdAt: Date | null
  }

  export type SeedphraseCountAggregateOutputType = {
    id: number
    seedHash: number
    createdAt: number
    _all: number
  }


  export type SeedphraseMinAggregateInputType = {
    id?: true
    seedHash?: true
    createdAt?: true
  }

  export type SeedphraseMaxAggregateInputType = {
    id?: true
    seedHash?: true
    createdAt?: true
  }

  export type SeedphraseCountAggregateInputType = {
    id?: true
    seedHash?: true
    createdAt?: true
    _all?: true
  }

  export type SeedphraseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seedphrase to aggregate.
     */
    where?: SeedphraseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seedphrases to fetch.
     */
    orderBy?: SeedphraseOrderByWithRelationInput | SeedphraseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeedphraseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seedphrases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seedphrases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Seedphrases
    **/
    _count?: true | SeedphraseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeedphraseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeedphraseMaxAggregateInputType
  }

  export type GetSeedphraseAggregateType<T extends SeedphraseAggregateArgs> = {
        [P in keyof T & keyof AggregateSeedphrase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeedphrase[P]>
      : GetScalarType<T[P], AggregateSeedphrase[P]>
  }




  export type SeedphraseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeedphraseWhereInput
    orderBy?: SeedphraseOrderByWithAggregationInput | SeedphraseOrderByWithAggregationInput[]
    by: SeedphraseScalarFieldEnum[] | SeedphraseScalarFieldEnum
    having?: SeedphraseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeedphraseCountAggregateInputType | true
    _min?: SeedphraseMinAggregateInputType
    _max?: SeedphraseMaxAggregateInputType
  }

  export type SeedphraseGroupByOutputType = {
    id: string
    seedHash: string
    createdAt: Date
    _count: SeedphraseCountAggregateOutputType | null
    _min: SeedphraseMinAggregateOutputType | null
    _max: SeedphraseMaxAggregateOutputType | null
  }

  type GetSeedphraseGroupByPayload<T extends SeedphraseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeedphraseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeedphraseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeedphraseGroupByOutputType[P]>
            : GetScalarType<T[P], SeedphraseGroupByOutputType[P]>
        }
      >
    >


  export type SeedphraseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seedHash?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["seedphrase"]>

  export type SeedphraseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seedHash?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["seedphrase"]>

  export type SeedphraseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seedHash?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["seedphrase"]>

  export type SeedphraseSelectScalar = {
    id?: boolean
    seedHash?: boolean
    createdAt?: boolean
  }

  export type SeedphraseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "seedHash" | "createdAt", ExtArgs["result"]["seedphrase"]>

  export type $SeedphrasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Seedphrase"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      seedHash: string
      createdAt: Date
    }, ExtArgs["result"]["seedphrase"]>
    composites: {}
  }

  type SeedphraseGetPayload<S extends boolean | null | undefined | SeedphraseDefaultArgs> = $Result.GetResult<Prisma.$SeedphrasePayload, S>

  type SeedphraseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeedphraseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeedphraseCountAggregateInputType | true
    }

  export interface SeedphraseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Seedphrase'], meta: { name: 'Seedphrase' } }
    /**
     * Find zero or one Seedphrase that matches the filter.
     * @param {SeedphraseFindUniqueArgs} args - Arguments to find a Seedphrase
     * @example
     * // Get one Seedphrase
     * const seedphrase = await prisma.seedphrase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeedphraseFindUniqueArgs>(args: SelectSubset<T, SeedphraseFindUniqueArgs<ExtArgs>>): Prisma__SeedphraseClient<$Result.GetResult<Prisma.$SeedphrasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Seedphrase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeedphraseFindUniqueOrThrowArgs} args - Arguments to find a Seedphrase
     * @example
     * // Get one Seedphrase
     * const seedphrase = await prisma.seedphrase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeedphraseFindUniqueOrThrowArgs>(args: SelectSubset<T, SeedphraseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeedphraseClient<$Result.GetResult<Prisma.$SeedphrasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seedphrase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeedphraseFindFirstArgs} args - Arguments to find a Seedphrase
     * @example
     * // Get one Seedphrase
     * const seedphrase = await prisma.seedphrase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeedphraseFindFirstArgs>(args?: SelectSubset<T, SeedphraseFindFirstArgs<ExtArgs>>): Prisma__SeedphraseClient<$Result.GetResult<Prisma.$SeedphrasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seedphrase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeedphraseFindFirstOrThrowArgs} args - Arguments to find a Seedphrase
     * @example
     * // Get one Seedphrase
     * const seedphrase = await prisma.seedphrase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeedphraseFindFirstOrThrowArgs>(args?: SelectSubset<T, SeedphraseFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeedphraseClient<$Result.GetResult<Prisma.$SeedphrasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Seedphrases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeedphraseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seedphrases
     * const seedphrases = await prisma.seedphrase.findMany()
     * 
     * // Get first 10 Seedphrases
     * const seedphrases = await prisma.seedphrase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seedphraseWithIdOnly = await prisma.seedphrase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeedphraseFindManyArgs>(args?: SelectSubset<T, SeedphraseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeedphrasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Seedphrase.
     * @param {SeedphraseCreateArgs} args - Arguments to create a Seedphrase.
     * @example
     * // Create one Seedphrase
     * const Seedphrase = await prisma.seedphrase.create({
     *   data: {
     *     // ... data to create a Seedphrase
     *   }
     * })
     * 
     */
    create<T extends SeedphraseCreateArgs>(args: SelectSubset<T, SeedphraseCreateArgs<ExtArgs>>): Prisma__SeedphraseClient<$Result.GetResult<Prisma.$SeedphrasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Seedphrases.
     * @param {SeedphraseCreateManyArgs} args - Arguments to create many Seedphrases.
     * @example
     * // Create many Seedphrases
     * const seedphrase = await prisma.seedphrase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeedphraseCreateManyArgs>(args?: SelectSubset<T, SeedphraseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Seedphrases and returns the data saved in the database.
     * @param {SeedphraseCreateManyAndReturnArgs} args - Arguments to create many Seedphrases.
     * @example
     * // Create many Seedphrases
     * const seedphrase = await prisma.seedphrase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Seedphrases and only return the `id`
     * const seedphraseWithIdOnly = await prisma.seedphrase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeedphraseCreateManyAndReturnArgs>(args?: SelectSubset<T, SeedphraseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeedphrasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Seedphrase.
     * @param {SeedphraseDeleteArgs} args - Arguments to delete one Seedphrase.
     * @example
     * // Delete one Seedphrase
     * const Seedphrase = await prisma.seedphrase.delete({
     *   where: {
     *     // ... filter to delete one Seedphrase
     *   }
     * })
     * 
     */
    delete<T extends SeedphraseDeleteArgs>(args: SelectSubset<T, SeedphraseDeleteArgs<ExtArgs>>): Prisma__SeedphraseClient<$Result.GetResult<Prisma.$SeedphrasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Seedphrase.
     * @param {SeedphraseUpdateArgs} args - Arguments to update one Seedphrase.
     * @example
     * // Update one Seedphrase
     * const seedphrase = await prisma.seedphrase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeedphraseUpdateArgs>(args: SelectSubset<T, SeedphraseUpdateArgs<ExtArgs>>): Prisma__SeedphraseClient<$Result.GetResult<Prisma.$SeedphrasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Seedphrases.
     * @param {SeedphraseDeleteManyArgs} args - Arguments to filter Seedphrases to delete.
     * @example
     * // Delete a few Seedphrases
     * const { count } = await prisma.seedphrase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeedphraseDeleteManyArgs>(args?: SelectSubset<T, SeedphraseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seedphrases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeedphraseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seedphrases
     * const seedphrase = await prisma.seedphrase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeedphraseUpdateManyArgs>(args: SelectSubset<T, SeedphraseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seedphrases and returns the data updated in the database.
     * @param {SeedphraseUpdateManyAndReturnArgs} args - Arguments to update many Seedphrases.
     * @example
     * // Update many Seedphrases
     * const seedphrase = await prisma.seedphrase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Seedphrases and only return the `id`
     * const seedphraseWithIdOnly = await prisma.seedphrase.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SeedphraseUpdateManyAndReturnArgs>(args: SelectSubset<T, SeedphraseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeedphrasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Seedphrase.
     * @param {SeedphraseUpsertArgs} args - Arguments to update or create a Seedphrase.
     * @example
     * // Update or create a Seedphrase
     * const seedphrase = await prisma.seedphrase.upsert({
     *   create: {
     *     // ... data to create a Seedphrase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seedphrase we want to update
     *   }
     * })
     */
    upsert<T extends SeedphraseUpsertArgs>(args: SelectSubset<T, SeedphraseUpsertArgs<ExtArgs>>): Prisma__SeedphraseClient<$Result.GetResult<Prisma.$SeedphrasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Seedphrases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeedphraseCountArgs} args - Arguments to filter Seedphrases to count.
     * @example
     * // Count the number of Seedphrases
     * const count = await prisma.seedphrase.count({
     *   where: {
     *     // ... the filter for the Seedphrases we want to count
     *   }
     * })
    **/
    count<T extends SeedphraseCountArgs>(
      args?: Subset<T, SeedphraseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeedphraseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seedphrase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeedphraseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeedphraseAggregateArgs>(args: Subset<T, SeedphraseAggregateArgs>): Prisma.PrismaPromise<GetSeedphraseAggregateType<T>>

    /**
     * Group by Seedphrase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeedphraseGroupByArgs} args - Group by arguments.
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
      T extends SeedphraseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeedphraseGroupByArgs['orderBy'] }
        : { orderBy?: SeedphraseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeedphraseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeedphraseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Seedphrase model
   */
  readonly fields: SeedphraseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Seedphrase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeedphraseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Seedphrase model
   */
  interface SeedphraseFieldRefs {
    readonly id: FieldRef<"Seedphrase", 'String'>
    readonly seedHash: FieldRef<"Seedphrase", 'String'>
    readonly createdAt: FieldRef<"Seedphrase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Seedphrase findUnique
   */
  export type SeedphraseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seedphrase
     */
    select?: SeedphraseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seedphrase
     */
    omit?: SeedphraseOmit<ExtArgs> | null
    /**
     * Filter, which Seedphrase to fetch.
     */
    where: SeedphraseWhereUniqueInput
  }

  /**
   * Seedphrase findUniqueOrThrow
   */
  export type SeedphraseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seedphrase
     */
    select?: SeedphraseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seedphrase
     */
    omit?: SeedphraseOmit<ExtArgs> | null
    /**
     * Filter, which Seedphrase to fetch.
     */
    where: SeedphraseWhereUniqueInput
  }

  /**
   * Seedphrase findFirst
   */
  export type SeedphraseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seedphrase
     */
    select?: SeedphraseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seedphrase
     */
    omit?: SeedphraseOmit<ExtArgs> | null
    /**
     * Filter, which Seedphrase to fetch.
     */
    where?: SeedphraseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seedphrases to fetch.
     */
    orderBy?: SeedphraseOrderByWithRelationInput | SeedphraseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seedphrases.
     */
    cursor?: SeedphraseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seedphrases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seedphrases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seedphrases.
     */
    distinct?: SeedphraseScalarFieldEnum | SeedphraseScalarFieldEnum[]
  }

  /**
   * Seedphrase findFirstOrThrow
   */
  export type SeedphraseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seedphrase
     */
    select?: SeedphraseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seedphrase
     */
    omit?: SeedphraseOmit<ExtArgs> | null
    /**
     * Filter, which Seedphrase to fetch.
     */
    where?: SeedphraseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seedphrases to fetch.
     */
    orderBy?: SeedphraseOrderByWithRelationInput | SeedphraseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seedphrases.
     */
    cursor?: SeedphraseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seedphrases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seedphrases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seedphrases.
     */
    distinct?: SeedphraseScalarFieldEnum | SeedphraseScalarFieldEnum[]
  }

  /**
   * Seedphrase findMany
   */
  export type SeedphraseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seedphrase
     */
    select?: SeedphraseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seedphrase
     */
    omit?: SeedphraseOmit<ExtArgs> | null
    /**
     * Filter, which Seedphrases to fetch.
     */
    where?: SeedphraseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seedphrases to fetch.
     */
    orderBy?: SeedphraseOrderByWithRelationInput | SeedphraseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Seedphrases.
     */
    cursor?: SeedphraseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seedphrases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seedphrases.
     */
    skip?: number
    distinct?: SeedphraseScalarFieldEnum | SeedphraseScalarFieldEnum[]
  }

  /**
   * Seedphrase create
   */
  export type SeedphraseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seedphrase
     */
    select?: SeedphraseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seedphrase
     */
    omit?: SeedphraseOmit<ExtArgs> | null
    /**
     * The data needed to create a Seedphrase.
     */
    data?: XOR<SeedphraseCreateInput, SeedphraseUncheckedCreateInput>
  }

  /**
   * Seedphrase createMany
   */
  export type SeedphraseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Seedphrases.
     */
    data: SeedphraseCreateManyInput | SeedphraseCreateManyInput[]
  }

  /**
   * Seedphrase createManyAndReturn
   */
  export type SeedphraseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seedphrase
     */
    select?: SeedphraseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seedphrase
     */
    omit?: SeedphraseOmit<ExtArgs> | null
    /**
     * The data used to create many Seedphrases.
     */
    data: SeedphraseCreateManyInput | SeedphraseCreateManyInput[]
  }

  /**
   * Seedphrase update
   */
  export type SeedphraseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seedphrase
     */
    select?: SeedphraseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seedphrase
     */
    omit?: SeedphraseOmit<ExtArgs> | null
    /**
     * The data needed to update a Seedphrase.
     */
    data: XOR<SeedphraseUpdateInput, SeedphraseUncheckedUpdateInput>
    /**
     * Choose, which Seedphrase to update.
     */
    where: SeedphraseWhereUniqueInput
  }

  /**
   * Seedphrase updateMany
   */
  export type SeedphraseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Seedphrases.
     */
    data: XOR<SeedphraseUpdateManyMutationInput, SeedphraseUncheckedUpdateManyInput>
    /**
     * Filter which Seedphrases to update
     */
    where?: SeedphraseWhereInput
    /**
     * Limit how many Seedphrases to update.
     */
    limit?: number
  }

  /**
   * Seedphrase updateManyAndReturn
   */
  export type SeedphraseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seedphrase
     */
    select?: SeedphraseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seedphrase
     */
    omit?: SeedphraseOmit<ExtArgs> | null
    /**
     * The data used to update Seedphrases.
     */
    data: XOR<SeedphraseUpdateManyMutationInput, SeedphraseUncheckedUpdateManyInput>
    /**
     * Filter which Seedphrases to update
     */
    where?: SeedphraseWhereInput
    /**
     * Limit how many Seedphrases to update.
     */
    limit?: number
  }

  /**
   * Seedphrase upsert
   */
  export type SeedphraseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seedphrase
     */
    select?: SeedphraseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seedphrase
     */
    omit?: SeedphraseOmit<ExtArgs> | null
    /**
     * The filter to search for the Seedphrase to update in case it exists.
     */
    where: SeedphraseWhereUniqueInput
    /**
     * In case the Seedphrase found by the `where` argument doesn't exist, create a new Seedphrase with this data.
     */
    create: XOR<SeedphraseCreateInput, SeedphraseUncheckedCreateInput>
    /**
     * In case the Seedphrase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeedphraseUpdateInput, SeedphraseUncheckedUpdateInput>
  }

  /**
   * Seedphrase delete
   */
  export type SeedphraseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seedphrase
     */
    select?: SeedphraseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seedphrase
     */
    omit?: SeedphraseOmit<ExtArgs> | null
    /**
     * Filter which Seedphrase to delete.
     */
    where: SeedphraseWhereUniqueInput
  }

  /**
   * Seedphrase deleteMany
   */
  export type SeedphraseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seedphrases to delete
     */
    where?: SeedphraseWhereInput
    /**
     * Limit how many Seedphrases to delete.
     */
    limit?: number
  }

  /**
   * Seedphrase without action
   */
  export type SeedphraseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seedphrase
     */
    select?: SeedphraseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seedphrase
     */
    omit?: SeedphraseOmit<ExtArgs> | null
  }


  /**
   * Model VaultItem
   */

  export type AggregateVaultItem = {
    _count: VaultItemCountAggregateOutputType | null
    _min: VaultItemMinAggregateOutputType | null
    _max: VaultItemMaxAggregateOutputType | null
  }

  export type VaultItemMinAggregateOutputType = {
    id: string | null
    type: $Enums.VaultType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VaultItemMaxAggregateOutputType = {
    id: string | null
    type: $Enums.VaultType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VaultItemCountAggregateOutputType = {
    id: number
    type: number
    data: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VaultItemMinAggregateInputType = {
    id?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VaultItemMaxAggregateInputType = {
    id?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VaultItemCountAggregateInputType = {
    id?: true
    type?: true
    data?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VaultItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VaultItem to aggregate.
     */
    where?: VaultItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VaultItems to fetch.
     */
    orderBy?: VaultItemOrderByWithRelationInput | VaultItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VaultItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VaultItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VaultItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VaultItems
    **/
    _count?: true | VaultItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VaultItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VaultItemMaxAggregateInputType
  }

  export type GetVaultItemAggregateType<T extends VaultItemAggregateArgs> = {
        [P in keyof T & keyof AggregateVaultItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVaultItem[P]>
      : GetScalarType<T[P], AggregateVaultItem[P]>
  }




  export type VaultItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VaultItemWhereInput
    orderBy?: VaultItemOrderByWithAggregationInput | VaultItemOrderByWithAggregationInput[]
    by: VaultItemScalarFieldEnum[] | VaultItemScalarFieldEnum
    having?: VaultItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VaultItemCountAggregateInputType | true
    _min?: VaultItemMinAggregateInputType
    _max?: VaultItemMaxAggregateInputType
  }

  export type VaultItemGroupByOutputType = {
    id: string
    type: $Enums.VaultType
    data: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: VaultItemCountAggregateOutputType | null
    _min: VaultItemMinAggregateOutputType | null
    _max: VaultItemMaxAggregateOutputType | null
  }

  type GetVaultItemGroupByPayload<T extends VaultItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VaultItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VaultItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VaultItemGroupByOutputType[P]>
            : GetScalarType<T[P], VaultItemGroupByOutputType[P]>
        }
      >
    >


  export type VaultItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vaultItem"]>

  export type VaultItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vaultItem"]>

  export type VaultItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vaultItem"]>

  export type VaultItemSelectScalar = {
    id?: boolean
    type?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VaultItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "data" | "createdAt" | "updatedAt", ExtArgs["result"]["vaultItem"]>

  export type $VaultItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VaultItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.VaultType
      data: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vaultItem"]>
    composites: {}
  }

  type VaultItemGetPayload<S extends boolean | null | undefined | VaultItemDefaultArgs> = $Result.GetResult<Prisma.$VaultItemPayload, S>

  type VaultItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VaultItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VaultItemCountAggregateInputType | true
    }

  export interface VaultItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VaultItem'], meta: { name: 'VaultItem' } }
    /**
     * Find zero or one VaultItem that matches the filter.
     * @param {VaultItemFindUniqueArgs} args - Arguments to find a VaultItem
     * @example
     * // Get one VaultItem
     * const vaultItem = await prisma.vaultItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VaultItemFindUniqueArgs>(args: SelectSubset<T, VaultItemFindUniqueArgs<ExtArgs>>): Prisma__VaultItemClient<$Result.GetResult<Prisma.$VaultItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VaultItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VaultItemFindUniqueOrThrowArgs} args - Arguments to find a VaultItem
     * @example
     * // Get one VaultItem
     * const vaultItem = await prisma.vaultItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VaultItemFindUniqueOrThrowArgs>(args: SelectSubset<T, VaultItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VaultItemClient<$Result.GetResult<Prisma.$VaultItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VaultItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultItemFindFirstArgs} args - Arguments to find a VaultItem
     * @example
     * // Get one VaultItem
     * const vaultItem = await prisma.vaultItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VaultItemFindFirstArgs>(args?: SelectSubset<T, VaultItemFindFirstArgs<ExtArgs>>): Prisma__VaultItemClient<$Result.GetResult<Prisma.$VaultItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VaultItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultItemFindFirstOrThrowArgs} args - Arguments to find a VaultItem
     * @example
     * // Get one VaultItem
     * const vaultItem = await prisma.vaultItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VaultItemFindFirstOrThrowArgs>(args?: SelectSubset<T, VaultItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__VaultItemClient<$Result.GetResult<Prisma.$VaultItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VaultItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VaultItems
     * const vaultItems = await prisma.vaultItem.findMany()
     * 
     * // Get first 10 VaultItems
     * const vaultItems = await prisma.vaultItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vaultItemWithIdOnly = await prisma.vaultItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VaultItemFindManyArgs>(args?: SelectSubset<T, VaultItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VaultItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VaultItem.
     * @param {VaultItemCreateArgs} args - Arguments to create a VaultItem.
     * @example
     * // Create one VaultItem
     * const VaultItem = await prisma.vaultItem.create({
     *   data: {
     *     // ... data to create a VaultItem
     *   }
     * })
     * 
     */
    create<T extends VaultItemCreateArgs>(args: SelectSubset<T, VaultItemCreateArgs<ExtArgs>>): Prisma__VaultItemClient<$Result.GetResult<Prisma.$VaultItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VaultItems.
     * @param {VaultItemCreateManyArgs} args - Arguments to create many VaultItems.
     * @example
     * // Create many VaultItems
     * const vaultItem = await prisma.vaultItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VaultItemCreateManyArgs>(args?: SelectSubset<T, VaultItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VaultItems and returns the data saved in the database.
     * @param {VaultItemCreateManyAndReturnArgs} args - Arguments to create many VaultItems.
     * @example
     * // Create many VaultItems
     * const vaultItem = await prisma.vaultItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VaultItems and only return the `id`
     * const vaultItemWithIdOnly = await prisma.vaultItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VaultItemCreateManyAndReturnArgs>(args?: SelectSubset<T, VaultItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VaultItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VaultItem.
     * @param {VaultItemDeleteArgs} args - Arguments to delete one VaultItem.
     * @example
     * // Delete one VaultItem
     * const VaultItem = await prisma.vaultItem.delete({
     *   where: {
     *     // ... filter to delete one VaultItem
     *   }
     * })
     * 
     */
    delete<T extends VaultItemDeleteArgs>(args: SelectSubset<T, VaultItemDeleteArgs<ExtArgs>>): Prisma__VaultItemClient<$Result.GetResult<Prisma.$VaultItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VaultItem.
     * @param {VaultItemUpdateArgs} args - Arguments to update one VaultItem.
     * @example
     * // Update one VaultItem
     * const vaultItem = await prisma.vaultItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VaultItemUpdateArgs>(args: SelectSubset<T, VaultItemUpdateArgs<ExtArgs>>): Prisma__VaultItemClient<$Result.GetResult<Prisma.$VaultItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VaultItems.
     * @param {VaultItemDeleteManyArgs} args - Arguments to filter VaultItems to delete.
     * @example
     * // Delete a few VaultItems
     * const { count } = await prisma.vaultItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VaultItemDeleteManyArgs>(args?: SelectSubset<T, VaultItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VaultItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VaultItems
     * const vaultItem = await prisma.vaultItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VaultItemUpdateManyArgs>(args: SelectSubset<T, VaultItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VaultItems and returns the data updated in the database.
     * @param {VaultItemUpdateManyAndReturnArgs} args - Arguments to update many VaultItems.
     * @example
     * // Update many VaultItems
     * const vaultItem = await prisma.vaultItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VaultItems and only return the `id`
     * const vaultItemWithIdOnly = await prisma.vaultItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VaultItemUpdateManyAndReturnArgs>(args: SelectSubset<T, VaultItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VaultItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VaultItem.
     * @param {VaultItemUpsertArgs} args - Arguments to update or create a VaultItem.
     * @example
     * // Update or create a VaultItem
     * const vaultItem = await prisma.vaultItem.upsert({
     *   create: {
     *     // ... data to create a VaultItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VaultItem we want to update
     *   }
     * })
     */
    upsert<T extends VaultItemUpsertArgs>(args: SelectSubset<T, VaultItemUpsertArgs<ExtArgs>>): Prisma__VaultItemClient<$Result.GetResult<Prisma.$VaultItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VaultItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultItemCountArgs} args - Arguments to filter VaultItems to count.
     * @example
     * // Count the number of VaultItems
     * const count = await prisma.vaultItem.count({
     *   where: {
     *     // ... the filter for the VaultItems we want to count
     *   }
     * })
    **/
    count<T extends VaultItemCountArgs>(
      args?: Subset<T, VaultItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VaultItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VaultItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VaultItemAggregateArgs>(args: Subset<T, VaultItemAggregateArgs>): Prisma.PrismaPromise<GetVaultItemAggregateType<T>>

    /**
     * Group by VaultItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultItemGroupByArgs} args - Group by arguments.
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
      T extends VaultItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VaultItemGroupByArgs['orderBy'] }
        : { orderBy?: VaultItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VaultItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVaultItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VaultItem model
   */
  readonly fields: VaultItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VaultItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VaultItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VaultItem model
   */
  interface VaultItemFieldRefs {
    readonly id: FieldRef<"VaultItem", 'String'>
    readonly type: FieldRef<"VaultItem", 'VaultType'>
    readonly data: FieldRef<"VaultItem", 'Json'>
    readonly createdAt: FieldRef<"VaultItem", 'DateTime'>
    readonly updatedAt: FieldRef<"VaultItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VaultItem findUnique
   */
  export type VaultItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultItem
     */
    select?: VaultItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VaultItem
     */
    omit?: VaultItemOmit<ExtArgs> | null
    /**
     * Filter, which VaultItem to fetch.
     */
    where: VaultItemWhereUniqueInput
  }

  /**
   * VaultItem findUniqueOrThrow
   */
  export type VaultItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultItem
     */
    select?: VaultItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VaultItem
     */
    omit?: VaultItemOmit<ExtArgs> | null
    /**
     * Filter, which VaultItem to fetch.
     */
    where: VaultItemWhereUniqueInput
  }

  /**
   * VaultItem findFirst
   */
  export type VaultItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultItem
     */
    select?: VaultItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VaultItem
     */
    omit?: VaultItemOmit<ExtArgs> | null
    /**
     * Filter, which VaultItem to fetch.
     */
    where?: VaultItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VaultItems to fetch.
     */
    orderBy?: VaultItemOrderByWithRelationInput | VaultItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VaultItems.
     */
    cursor?: VaultItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VaultItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VaultItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VaultItems.
     */
    distinct?: VaultItemScalarFieldEnum | VaultItemScalarFieldEnum[]
  }

  /**
   * VaultItem findFirstOrThrow
   */
  export type VaultItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultItem
     */
    select?: VaultItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VaultItem
     */
    omit?: VaultItemOmit<ExtArgs> | null
    /**
     * Filter, which VaultItem to fetch.
     */
    where?: VaultItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VaultItems to fetch.
     */
    orderBy?: VaultItemOrderByWithRelationInput | VaultItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VaultItems.
     */
    cursor?: VaultItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VaultItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VaultItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VaultItems.
     */
    distinct?: VaultItemScalarFieldEnum | VaultItemScalarFieldEnum[]
  }

  /**
   * VaultItem findMany
   */
  export type VaultItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultItem
     */
    select?: VaultItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VaultItem
     */
    omit?: VaultItemOmit<ExtArgs> | null
    /**
     * Filter, which VaultItems to fetch.
     */
    where?: VaultItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VaultItems to fetch.
     */
    orderBy?: VaultItemOrderByWithRelationInput | VaultItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VaultItems.
     */
    cursor?: VaultItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VaultItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VaultItems.
     */
    skip?: number
    distinct?: VaultItemScalarFieldEnum | VaultItemScalarFieldEnum[]
  }

  /**
   * VaultItem create
   */
  export type VaultItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultItem
     */
    select?: VaultItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VaultItem
     */
    omit?: VaultItemOmit<ExtArgs> | null
    /**
     * The data needed to create a VaultItem.
     */
    data: XOR<VaultItemCreateInput, VaultItemUncheckedCreateInput>
  }

  /**
   * VaultItem createMany
   */
  export type VaultItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VaultItems.
     */
    data: VaultItemCreateManyInput | VaultItemCreateManyInput[]
  }

  /**
   * VaultItem createManyAndReturn
   */
  export type VaultItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultItem
     */
    select?: VaultItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VaultItem
     */
    omit?: VaultItemOmit<ExtArgs> | null
    /**
     * The data used to create many VaultItems.
     */
    data: VaultItemCreateManyInput | VaultItemCreateManyInput[]
  }

  /**
   * VaultItem update
   */
  export type VaultItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultItem
     */
    select?: VaultItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VaultItem
     */
    omit?: VaultItemOmit<ExtArgs> | null
    /**
     * The data needed to update a VaultItem.
     */
    data: XOR<VaultItemUpdateInput, VaultItemUncheckedUpdateInput>
    /**
     * Choose, which VaultItem to update.
     */
    where: VaultItemWhereUniqueInput
  }

  /**
   * VaultItem updateMany
   */
  export type VaultItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VaultItems.
     */
    data: XOR<VaultItemUpdateManyMutationInput, VaultItemUncheckedUpdateManyInput>
    /**
     * Filter which VaultItems to update
     */
    where?: VaultItemWhereInput
    /**
     * Limit how many VaultItems to update.
     */
    limit?: number
  }

  /**
   * VaultItem updateManyAndReturn
   */
  export type VaultItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultItem
     */
    select?: VaultItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VaultItem
     */
    omit?: VaultItemOmit<ExtArgs> | null
    /**
     * The data used to update VaultItems.
     */
    data: XOR<VaultItemUpdateManyMutationInput, VaultItemUncheckedUpdateManyInput>
    /**
     * Filter which VaultItems to update
     */
    where?: VaultItemWhereInput
    /**
     * Limit how many VaultItems to update.
     */
    limit?: number
  }

  /**
   * VaultItem upsert
   */
  export type VaultItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultItem
     */
    select?: VaultItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VaultItem
     */
    omit?: VaultItemOmit<ExtArgs> | null
    /**
     * The filter to search for the VaultItem to update in case it exists.
     */
    where: VaultItemWhereUniqueInput
    /**
     * In case the VaultItem found by the `where` argument doesn't exist, create a new VaultItem with this data.
     */
    create: XOR<VaultItemCreateInput, VaultItemUncheckedCreateInput>
    /**
     * In case the VaultItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VaultItemUpdateInput, VaultItemUncheckedUpdateInput>
  }

  /**
   * VaultItem delete
   */
  export type VaultItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultItem
     */
    select?: VaultItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VaultItem
     */
    omit?: VaultItemOmit<ExtArgs> | null
    /**
     * Filter which VaultItem to delete.
     */
    where: VaultItemWhereUniqueInput
  }

  /**
   * VaultItem deleteMany
   */
  export type VaultItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VaultItems to delete
     */
    where?: VaultItemWhereInput
    /**
     * Limit how many VaultItems to delete.
     */
    limit?: number
  }

  /**
   * VaultItem without action
   */
  export type VaultItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultItem
     */
    select?: VaultItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VaultItem
     */
    omit?: VaultItemOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AuthentificationScalarFieldEnum: {
    id: 'id',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AuthentificationScalarFieldEnum = (typeof AuthentificationScalarFieldEnum)[keyof typeof AuthentificationScalarFieldEnum]


  export const SeedphraseScalarFieldEnum: {
    id: 'id',
    seedHash: 'seedHash',
    createdAt: 'createdAt'
  };

  export type SeedphraseScalarFieldEnum = (typeof SeedphraseScalarFieldEnum)[keyof typeof SeedphraseScalarFieldEnum]


  export const VaultItemScalarFieldEnum: {
    id: 'id',
    type: 'type',
    data: 'data',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VaultItemScalarFieldEnum = (typeof VaultItemScalarFieldEnum)[keyof typeof VaultItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'VaultType'
   */
  export type EnumVaultTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VaultType'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type AuthentificationWhereInput = {
    AND?: AuthentificationWhereInput | AuthentificationWhereInput[]
    OR?: AuthentificationWhereInput[]
    NOT?: AuthentificationWhereInput | AuthentificationWhereInput[]
    id?: StringFilter<"Authentification"> | string
    password?: StringFilter<"Authentification"> | string
    createdAt?: DateTimeFilter<"Authentification"> | Date | string
    updatedAt?: DateTimeFilter<"Authentification"> | Date | string
  }

  export type AuthentificationOrderByWithRelationInput = {
    id?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthentificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuthentificationWhereInput | AuthentificationWhereInput[]
    OR?: AuthentificationWhereInput[]
    NOT?: AuthentificationWhereInput | AuthentificationWhereInput[]
    password?: StringFilter<"Authentification"> | string
    createdAt?: DateTimeFilter<"Authentification"> | Date | string
    updatedAt?: DateTimeFilter<"Authentification"> | Date | string
  }, "id">

  export type AuthentificationOrderByWithAggregationInput = {
    id?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AuthentificationCountOrderByAggregateInput
    _max?: AuthentificationMaxOrderByAggregateInput
    _min?: AuthentificationMinOrderByAggregateInput
  }

  export type AuthentificationScalarWhereWithAggregatesInput = {
    AND?: AuthentificationScalarWhereWithAggregatesInput | AuthentificationScalarWhereWithAggregatesInput[]
    OR?: AuthentificationScalarWhereWithAggregatesInput[]
    NOT?: AuthentificationScalarWhereWithAggregatesInput | AuthentificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Authentification"> | string
    password?: StringWithAggregatesFilter<"Authentification"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Authentification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Authentification"> | Date | string
  }

  export type SeedphraseWhereInput = {
    AND?: SeedphraseWhereInput | SeedphraseWhereInput[]
    OR?: SeedphraseWhereInput[]
    NOT?: SeedphraseWhereInput | SeedphraseWhereInput[]
    id?: StringFilter<"Seedphrase"> | string
    seedHash?: StringFilter<"Seedphrase"> | string
    createdAt?: DateTimeFilter<"Seedphrase"> | Date | string
  }

  export type SeedphraseOrderByWithRelationInput = {
    id?: SortOrder
    seedHash?: SortOrder
    createdAt?: SortOrder
  }

  export type SeedphraseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SeedphraseWhereInput | SeedphraseWhereInput[]
    OR?: SeedphraseWhereInput[]
    NOT?: SeedphraseWhereInput | SeedphraseWhereInput[]
    seedHash?: StringFilter<"Seedphrase"> | string
    createdAt?: DateTimeFilter<"Seedphrase"> | Date | string
  }, "id">

  export type SeedphraseOrderByWithAggregationInput = {
    id?: SortOrder
    seedHash?: SortOrder
    createdAt?: SortOrder
    _count?: SeedphraseCountOrderByAggregateInput
    _max?: SeedphraseMaxOrderByAggregateInput
    _min?: SeedphraseMinOrderByAggregateInput
  }

  export type SeedphraseScalarWhereWithAggregatesInput = {
    AND?: SeedphraseScalarWhereWithAggregatesInput | SeedphraseScalarWhereWithAggregatesInput[]
    OR?: SeedphraseScalarWhereWithAggregatesInput[]
    NOT?: SeedphraseScalarWhereWithAggregatesInput | SeedphraseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Seedphrase"> | string
    seedHash?: StringWithAggregatesFilter<"Seedphrase"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Seedphrase"> | Date | string
  }

  export type VaultItemWhereInput = {
    AND?: VaultItemWhereInput | VaultItemWhereInput[]
    OR?: VaultItemWhereInput[]
    NOT?: VaultItemWhereInput | VaultItemWhereInput[]
    id?: StringFilter<"VaultItem"> | string
    type?: EnumVaultTypeFilter<"VaultItem"> | $Enums.VaultType
    data?: JsonFilter<"VaultItem">
    createdAt?: DateTimeFilter<"VaultItem"> | Date | string
    updatedAt?: DateTimeFilter<"VaultItem"> | Date | string
  }

  export type VaultItemOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VaultItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VaultItemWhereInput | VaultItemWhereInput[]
    OR?: VaultItemWhereInput[]
    NOT?: VaultItemWhereInput | VaultItemWhereInput[]
    type?: EnumVaultTypeFilter<"VaultItem"> | $Enums.VaultType
    data?: JsonFilter<"VaultItem">
    createdAt?: DateTimeFilter<"VaultItem"> | Date | string
    updatedAt?: DateTimeFilter<"VaultItem"> | Date | string
  }, "id">

  export type VaultItemOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VaultItemCountOrderByAggregateInput
    _max?: VaultItemMaxOrderByAggregateInput
    _min?: VaultItemMinOrderByAggregateInput
  }

  export type VaultItemScalarWhereWithAggregatesInput = {
    AND?: VaultItemScalarWhereWithAggregatesInput | VaultItemScalarWhereWithAggregatesInput[]
    OR?: VaultItemScalarWhereWithAggregatesInput[]
    NOT?: VaultItemScalarWhereWithAggregatesInput | VaultItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VaultItem"> | string
    type?: EnumVaultTypeWithAggregatesFilter<"VaultItem"> | $Enums.VaultType
    data?: JsonWithAggregatesFilter<"VaultItem">
    createdAt?: DateTimeWithAggregatesFilter<"VaultItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VaultItem"> | Date | string
  }

  export type AuthentificationCreateInput = {
    id?: string
    password?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthentificationUncheckedCreateInput = {
    id?: string
    password?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthentificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthentificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthentificationCreateManyInput = {
    id?: string
    password?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthentificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthentificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeedphraseCreateInput = {
    id?: string
    seedHash?: string
    createdAt?: Date | string
  }

  export type SeedphraseUncheckedCreateInput = {
    id?: string
    seedHash?: string
    createdAt?: Date | string
  }

  export type SeedphraseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    seedHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeedphraseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    seedHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeedphraseCreateManyInput = {
    id?: string
    seedHash?: string
    createdAt?: Date | string
  }

  export type SeedphraseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    seedHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeedphraseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    seedHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VaultItemCreateInput = {
    id?: string
    type: $Enums.VaultType
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VaultItemUncheckedCreateInput = {
    id?: string
    type: $Enums.VaultType
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VaultItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumVaultTypeFieldUpdateOperationsInput | $Enums.VaultType
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VaultItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumVaultTypeFieldUpdateOperationsInput | $Enums.VaultType
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VaultItemCreateManyInput = {
    id?: string
    type: $Enums.VaultType
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VaultItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumVaultTypeFieldUpdateOperationsInput | $Enums.VaultType
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VaultItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumVaultTypeFieldUpdateOperationsInput | $Enums.VaultType
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AuthentificationCountOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthentificationMaxOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthentificationMinOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SeedphraseCountOrderByAggregateInput = {
    id?: SortOrder
    seedHash?: SortOrder
    createdAt?: SortOrder
  }

  export type SeedphraseMaxOrderByAggregateInput = {
    id?: SortOrder
    seedHash?: SortOrder
    createdAt?: SortOrder
  }

  export type SeedphraseMinOrderByAggregateInput = {
    id?: SortOrder
    seedHash?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumVaultTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VaultType | EnumVaultTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VaultType[]
    notIn?: $Enums.VaultType[]
    not?: NestedEnumVaultTypeFilter<$PrismaModel> | $Enums.VaultType
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type VaultItemCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VaultItemMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VaultItemMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumVaultTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VaultType | EnumVaultTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VaultType[]
    notIn?: $Enums.VaultType[]
    not?: NestedEnumVaultTypeWithAggregatesFilter<$PrismaModel> | $Enums.VaultType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVaultTypeFilter<$PrismaModel>
    _max?: NestedEnumVaultTypeFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumVaultTypeFieldUpdateOperationsInput = {
    set?: $Enums.VaultType
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumVaultTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VaultType | EnumVaultTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VaultType[]
    notIn?: $Enums.VaultType[]
    not?: NestedEnumVaultTypeFilter<$PrismaModel> | $Enums.VaultType
  }

  export type NestedEnumVaultTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VaultType | EnumVaultTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VaultType[]
    notIn?: $Enums.VaultType[]
    not?: NestedEnumVaultTypeWithAggregatesFilter<$PrismaModel> | $Enums.VaultType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVaultTypeFilter<$PrismaModel>
    _max?: NestedEnumVaultTypeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }



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