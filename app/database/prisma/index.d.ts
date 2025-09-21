
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
 * Model authentification
 * 
 */
export type authentification = $Result.DefaultSelection<Prisma.$authentificationPayload>
/**
 * Model credentials
 * 
 */
export type credentials = $Result.DefaultSelection<Prisma.$credentialsPayload>

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
   * `prisma.authentification`: Exposes CRUD operations for the **authentification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authentifications
    * const authentifications = await prisma.authentification.findMany()
    * ```
    */
  get authentification(): Prisma.authentificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.credentials`: Exposes CRUD operations for the **credentials** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Credentials
    * const credentials = await prisma.credentials.findMany()
    * ```
    */
  get credentials(): Prisma.credentialsDelegate<ExtArgs, ClientOptions>;
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
    authentification: 'authentification',
    credentials: 'credentials'
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
      modelProps: "authentification" | "credentials"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      authentification: {
        payload: Prisma.$authentificationPayload<ExtArgs>
        fields: Prisma.authentificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.authentificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authentificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.authentificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authentificationPayload>
          }
          findFirst: {
            args: Prisma.authentificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authentificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.authentificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authentificationPayload>
          }
          findMany: {
            args: Prisma.authentificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authentificationPayload>[]
          }
          create: {
            args: Prisma.authentificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authentificationPayload>
          }
          createMany: {
            args: Prisma.authentificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.authentificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authentificationPayload>[]
          }
          delete: {
            args: Prisma.authentificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authentificationPayload>
          }
          update: {
            args: Prisma.authentificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authentificationPayload>
          }
          deleteMany: {
            args: Prisma.authentificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.authentificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.authentificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authentificationPayload>[]
          }
          upsert: {
            args: Prisma.authentificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authentificationPayload>
          }
          aggregate: {
            args: Prisma.AuthentificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthentification>
          }
          groupBy: {
            args: Prisma.authentificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthentificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.authentificationCountArgs<ExtArgs>
            result: $Utils.Optional<AuthentificationCountAggregateOutputType> | number
          }
        }
      }
      credentials: {
        payload: Prisma.$credentialsPayload<ExtArgs>
        fields: Prisma.credentialsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.credentialsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credentialsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.credentialsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credentialsPayload>
          }
          findFirst: {
            args: Prisma.credentialsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credentialsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.credentialsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credentialsPayload>
          }
          findMany: {
            args: Prisma.credentialsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credentialsPayload>[]
          }
          create: {
            args: Prisma.credentialsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credentialsPayload>
          }
          createMany: {
            args: Prisma.credentialsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.credentialsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credentialsPayload>[]
          }
          delete: {
            args: Prisma.credentialsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credentialsPayload>
          }
          update: {
            args: Prisma.credentialsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credentialsPayload>
          }
          deleteMany: {
            args: Prisma.credentialsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.credentialsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.credentialsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credentialsPayload>[]
          }
          upsert: {
            args: Prisma.credentialsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credentialsPayload>
          }
          aggregate: {
            args: Prisma.CredentialsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCredentials>
          }
          groupBy: {
            args: Prisma.credentialsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CredentialsGroupByOutputType>[]
          }
          count: {
            args: Prisma.credentialsCountArgs<ExtArgs>
            result: $Utils.Optional<CredentialsCountAggregateOutputType> | number
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
    authentification?: authentificationOmit
    credentials?: credentialsOmit
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
   * Model authentification
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
     * Filter which authentification to aggregate.
     */
    where?: authentificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authentifications to fetch.
     */
    orderBy?: authentificationOrderByWithRelationInput | authentificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: authentificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authentifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authentifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned authentifications
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




  export type authentificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authentificationWhereInput
    orderBy?: authentificationOrderByWithAggregationInput | authentificationOrderByWithAggregationInput[]
    by: AuthentificationScalarFieldEnum[] | AuthentificationScalarFieldEnum
    having?: authentificationScalarWhereWithAggregatesInput
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

  type GetAuthentificationGroupByPayload<T extends authentificationGroupByArgs> = Prisma.PrismaPromise<
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


  export type authentificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["authentification"]>

  export type authentificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["authentification"]>

  export type authentificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["authentification"]>

  export type authentificationSelectScalar = {
    id?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type authentificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["authentification"]>

  export type $authentificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "authentification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["authentification"]>
    composites: {}
  }

  type authentificationGetPayload<S extends boolean | null | undefined | authentificationDefaultArgs> = $Result.GetResult<Prisma.$authentificationPayload, S>

  type authentificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<authentificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthentificationCountAggregateInputType | true
    }

  export interface authentificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['authentification'], meta: { name: 'authentification' } }
    /**
     * Find zero or one Authentification that matches the filter.
     * @param {authentificationFindUniqueArgs} args - Arguments to find a Authentification
     * @example
     * // Get one Authentification
     * const authentification = await prisma.authentification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends authentificationFindUniqueArgs>(args: SelectSubset<T, authentificationFindUniqueArgs<ExtArgs>>): Prisma__authentificationClient<$Result.GetResult<Prisma.$authentificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Authentification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {authentificationFindUniqueOrThrowArgs} args - Arguments to find a Authentification
     * @example
     * // Get one Authentification
     * const authentification = await prisma.authentification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends authentificationFindUniqueOrThrowArgs>(args: SelectSubset<T, authentificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__authentificationClient<$Result.GetResult<Prisma.$authentificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authentification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authentificationFindFirstArgs} args - Arguments to find a Authentification
     * @example
     * // Get one Authentification
     * const authentification = await prisma.authentification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends authentificationFindFirstArgs>(args?: SelectSubset<T, authentificationFindFirstArgs<ExtArgs>>): Prisma__authentificationClient<$Result.GetResult<Prisma.$authentificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authentification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authentificationFindFirstOrThrowArgs} args - Arguments to find a Authentification
     * @example
     * // Get one Authentification
     * const authentification = await prisma.authentification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends authentificationFindFirstOrThrowArgs>(args?: SelectSubset<T, authentificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__authentificationClient<$Result.GetResult<Prisma.$authentificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Authentifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authentificationFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends authentificationFindManyArgs>(args?: SelectSubset<T, authentificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authentificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Authentification.
     * @param {authentificationCreateArgs} args - Arguments to create a Authentification.
     * @example
     * // Create one Authentification
     * const Authentification = await prisma.authentification.create({
     *   data: {
     *     // ... data to create a Authentification
     *   }
     * })
     * 
     */
    create<T extends authentificationCreateArgs>(args: SelectSubset<T, authentificationCreateArgs<ExtArgs>>): Prisma__authentificationClient<$Result.GetResult<Prisma.$authentificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Authentifications.
     * @param {authentificationCreateManyArgs} args - Arguments to create many Authentifications.
     * @example
     * // Create many Authentifications
     * const authentification = await prisma.authentification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends authentificationCreateManyArgs>(args?: SelectSubset<T, authentificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Authentifications and returns the data saved in the database.
     * @param {authentificationCreateManyAndReturnArgs} args - Arguments to create many Authentifications.
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
    createManyAndReturn<T extends authentificationCreateManyAndReturnArgs>(args?: SelectSubset<T, authentificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authentificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Authentification.
     * @param {authentificationDeleteArgs} args - Arguments to delete one Authentification.
     * @example
     * // Delete one Authentification
     * const Authentification = await prisma.authentification.delete({
     *   where: {
     *     // ... filter to delete one Authentification
     *   }
     * })
     * 
     */
    delete<T extends authentificationDeleteArgs>(args: SelectSubset<T, authentificationDeleteArgs<ExtArgs>>): Prisma__authentificationClient<$Result.GetResult<Prisma.$authentificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Authentification.
     * @param {authentificationUpdateArgs} args - Arguments to update one Authentification.
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
    update<T extends authentificationUpdateArgs>(args: SelectSubset<T, authentificationUpdateArgs<ExtArgs>>): Prisma__authentificationClient<$Result.GetResult<Prisma.$authentificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Authentifications.
     * @param {authentificationDeleteManyArgs} args - Arguments to filter Authentifications to delete.
     * @example
     * // Delete a few Authentifications
     * const { count } = await prisma.authentification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends authentificationDeleteManyArgs>(args?: SelectSubset<T, authentificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authentifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authentificationUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends authentificationUpdateManyArgs>(args: SelectSubset<T, authentificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authentifications and returns the data updated in the database.
     * @param {authentificationUpdateManyAndReturnArgs} args - Arguments to update many Authentifications.
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
    updateManyAndReturn<T extends authentificationUpdateManyAndReturnArgs>(args: SelectSubset<T, authentificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authentificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Authentification.
     * @param {authentificationUpsertArgs} args - Arguments to update or create a Authentification.
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
    upsert<T extends authentificationUpsertArgs>(args: SelectSubset<T, authentificationUpsertArgs<ExtArgs>>): Prisma__authentificationClient<$Result.GetResult<Prisma.$authentificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Authentifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authentificationCountArgs} args - Arguments to filter Authentifications to count.
     * @example
     * // Count the number of Authentifications
     * const count = await prisma.authentification.count({
     *   where: {
     *     // ... the filter for the Authentifications we want to count
     *   }
     * })
    **/
    count<T extends authentificationCountArgs>(
      args?: Subset<T, authentificationCountArgs>,
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
     * @param {authentificationGroupByArgs} args - Group by arguments.
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
      T extends authentificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: authentificationGroupByArgs['orderBy'] }
        : { orderBy?: authentificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, authentificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthentificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the authentification model
   */
  readonly fields: authentificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for authentification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__authentificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the authentification model
   */
  interface authentificationFieldRefs {
    readonly id: FieldRef<"authentification", 'String'>
    readonly password: FieldRef<"authentification", 'String'>
    readonly createdAt: FieldRef<"authentification", 'DateTime'>
    readonly updatedAt: FieldRef<"authentification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * authentification findUnique
   */
  export type authentificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentification
     */
    select?: authentificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authentification
     */
    omit?: authentificationOmit<ExtArgs> | null
    /**
     * Filter, which authentification to fetch.
     */
    where: authentificationWhereUniqueInput
  }

  /**
   * authentification findUniqueOrThrow
   */
  export type authentificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentification
     */
    select?: authentificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authentification
     */
    omit?: authentificationOmit<ExtArgs> | null
    /**
     * Filter, which authentification to fetch.
     */
    where: authentificationWhereUniqueInput
  }

  /**
   * authentification findFirst
   */
  export type authentificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentification
     */
    select?: authentificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authentification
     */
    omit?: authentificationOmit<ExtArgs> | null
    /**
     * Filter, which authentification to fetch.
     */
    where?: authentificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authentifications to fetch.
     */
    orderBy?: authentificationOrderByWithRelationInput | authentificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authentifications.
     */
    cursor?: authentificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authentifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authentifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authentifications.
     */
    distinct?: AuthentificationScalarFieldEnum | AuthentificationScalarFieldEnum[]
  }

  /**
   * authentification findFirstOrThrow
   */
  export type authentificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentification
     */
    select?: authentificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authentification
     */
    omit?: authentificationOmit<ExtArgs> | null
    /**
     * Filter, which authentification to fetch.
     */
    where?: authentificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authentifications to fetch.
     */
    orderBy?: authentificationOrderByWithRelationInput | authentificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authentifications.
     */
    cursor?: authentificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authentifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authentifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authentifications.
     */
    distinct?: AuthentificationScalarFieldEnum | AuthentificationScalarFieldEnum[]
  }

  /**
   * authentification findMany
   */
  export type authentificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentification
     */
    select?: authentificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authentification
     */
    omit?: authentificationOmit<ExtArgs> | null
    /**
     * Filter, which authentifications to fetch.
     */
    where?: authentificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authentifications to fetch.
     */
    orderBy?: authentificationOrderByWithRelationInput | authentificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing authentifications.
     */
    cursor?: authentificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authentifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authentifications.
     */
    skip?: number
    distinct?: AuthentificationScalarFieldEnum | AuthentificationScalarFieldEnum[]
  }

  /**
   * authentification create
   */
  export type authentificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentification
     */
    select?: authentificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authentification
     */
    omit?: authentificationOmit<ExtArgs> | null
    /**
     * The data needed to create a authentification.
     */
    data?: XOR<authentificationCreateInput, authentificationUncheckedCreateInput>
  }

  /**
   * authentification createMany
   */
  export type authentificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many authentifications.
     */
    data: authentificationCreateManyInput | authentificationCreateManyInput[]
  }

  /**
   * authentification createManyAndReturn
   */
  export type authentificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentification
     */
    select?: authentificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the authentification
     */
    omit?: authentificationOmit<ExtArgs> | null
    /**
     * The data used to create many authentifications.
     */
    data: authentificationCreateManyInput | authentificationCreateManyInput[]
  }

  /**
   * authentification update
   */
  export type authentificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentification
     */
    select?: authentificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authentification
     */
    omit?: authentificationOmit<ExtArgs> | null
    /**
     * The data needed to update a authentification.
     */
    data: XOR<authentificationUpdateInput, authentificationUncheckedUpdateInput>
    /**
     * Choose, which authentification to update.
     */
    where: authentificationWhereUniqueInput
  }

  /**
   * authentification updateMany
   */
  export type authentificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update authentifications.
     */
    data: XOR<authentificationUpdateManyMutationInput, authentificationUncheckedUpdateManyInput>
    /**
     * Filter which authentifications to update
     */
    where?: authentificationWhereInput
    /**
     * Limit how many authentifications to update.
     */
    limit?: number
  }

  /**
   * authentification updateManyAndReturn
   */
  export type authentificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentification
     */
    select?: authentificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the authentification
     */
    omit?: authentificationOmit<ExtArgs> | null
    /**
     * The data used to update authentifications.
     */
    data: XOR<authentificationUpdateManyMutationInput, authentificationUncheckedUpdateManyInput>
    /**
     * Filter which authentifications to update
     */
    where?: authentificationWhereInput
    /**
     * Limit how many authentifications to update.
     */
    limit?: number
  }

  /**
   * authentification upsert
   */
  export type authentificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentification
     */
    select?: authentificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authentification
     */
    omit?: authentificationOmit<ExtArgs> | null
    /**
     * The filter to search for the authentification to update in case it exists.
     */
    where: authentificationWhereUniqueInput
    /**
     * In case the authentification found by the `where` argument doesn't exist, create a new authentification with this data.
     */
    create: XOR<authentificationCreateInput, authentificationUncheckedCreateInput>
    /**
     * In case the authentification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<authentificationUpdateInput, authentificationUncheckedUpdateInput>
  }

  /**
   * authentification delete
   */
  export type authentificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentification
     */
    select?: authentificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authentification
     */
    omit?: authentificationOmit<ExtArgs> | null
    /**
     * Filter which authentification to delete.
     */
    where: authentificationWhereUniqueInput
  }

  /**
   * authentification deleteMany
   */
  export type authentificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authentifications to delete
     */
    where?: authentificationWhereInput
    /**
     * Limit how many authentifications to delete.
     */
    limit?: number
  }

  /**
   * authentification without action
   */
  export type authentificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authentification
     */
    select?: authentificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the authentification
     */
    omit?: authentificationOmit<ExtArgs> | null
  }


  /**
   * Model credentials
   */

  export type AggregateCredentials = {
    _count: CredentialsCountAggregateOutputType | null
    _min: CredentialsMinAggregateOutputType | null
    _max: CredentialsMaxAggregateOutputType | null
  }

  export type CredentialsMinAggregateOutputType = {
    id: string | null
    url: string | null
    originUrl: string | null
    login: string | null
    password: string | null
    iv: string | null
    tag: string | null
    notes: string | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CredentialsMaxAggregateOutputType = {
    id: string | null
    url: string | null
    originUrl: string | null
    login: string | null
    password: string | null
    iv: string | null
    tag: string | null
    notes: string | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CredentialsCountAggregateOutputType = {
    id: number
    url: number
    originUrl: number
    login: number
    password: number
    iv: number
    tag: number
    notes: number
    category: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CredentialsMinAggregateInputType = {
    id?: true
    url?: true
    originUrl?: true
    login?: true
    password?: true
    iv?: true
    tag?: true
    notes?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CredentialsMaxAggregateInputType = {
    id?: true
    url?: true
    originUrl?: true
    login?: true
    password?: true
    iv?: true
    tag?: true
    notes?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CredentialsCountAggregateInputType = {
    id?: true
    url?: true
    originUrl?: true
    login?: true
    password?: true
    iv?: true
    tag?: true
    notes?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CredentialsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which credentials to aggregate.
     */
    where?: credentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of credentials to fetch.
     */
    orderBy?: credentialsOrderByWithRelationInput | credentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: credentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned credentials
    **/
    _count?: true | CredentialsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CredentialsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CredentialsMaxAggregateInputType
  }

  export type GetCredentialsAggregateType<T extends CredentialsAggregateArgs> = {
        [P in keyof T & keyof AggregateCredentials]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCredentials[P]>
      : GetScalarType<T[P], AggregateCredentials[P]>
  }




  export type credentialsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: credentialsWhereInput
    orderBy?: credentialsOrderByWithAggregationInput | credentialsOrderByWithAggregationInput[]
    by: CredentialsScalarFieldEnum[] | CredentialsScalarFieldEnum
    having?: credentialsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CredentialsCountAggregateInputType | true
    _min?: CredentialsMinAggregateInputType
    _max?: CredentialsMaxAggregateInputType
  }

  export type CredentialsGroupByOutputType = {
    id: string
    url: string
    originUrl: string
    login: string
    password: string
    iv: string
    tag: string
    notes: string
    category: string
    createdAt: Date
    updatedAt: Date
    _count: CredentialsCountAggregateOutputType | null
    _min: CredentialsMinAggregateOutputType | null
    _max: CredentialsMaxAggregateOutputType | null
  }

  type GetCredentialsGroupByPayload<T extends credentialsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CredentialsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CredentialsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CredentialsGroupByOutputType[P]>
            : GetScalarType<T[P], CredentialsGroupByOutputType[P]>
        }
      >
    >


  export type credentialsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    originUrl?: boolean
    login?: boolean
    password?: boolean
    iv?: boolean
    tag?: boolean
    notes?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["credentials"]>

  export type credentialsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    originUrl?: boolean
    login?: boolean
    password?: boolean
    iv?: boolean
    tag?: boolean
    notes?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["credentials"]>

  export type credentialsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    originUrl?: boolean
    login?: boolean
    password?: boolean
    iv?: boolean
    tag?: boolean
    notes?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["credentials"]>

  export type credentialsSelectScalar = {
    id?: boolean
    url?: boolean
    originUrl?: boolean
    login?: boolean
    password?: boolean
    iv?: boolean
    tag?: boolean
    notes?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type credentialsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "originUrl" | "login" | "password" | "iv" | "tag" | "notes" | "category" | "createdAt" | "updatedAt", ExtArgs["result"]["credentials"]>

  export type $credentialsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "credentials"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      originUrl: string
      login: string
      password: string
      iv: string
      tag: string
      notes: string
      category: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["credentials"]>
    composites: {}
  }

  type credentialsGetPayload<S extends boolean | null | undefined | credentialsDefaultArgs> = $Result.GetResult<Prisma.$credentialsPayload, S>

  type credentialsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<credentialsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CredentialsCountAggregateInputType | true
    }

  export interface credentialsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['credentials'], meta: { name: 'credentials' } }
    /**
     * Find zero or one Credentials that matches the filter.
     * @param {credentialsFindUniqueArgs} args - Arguments to find a Credentials
     * @example
     * // Get one Credentials
     * const credentials = await prisma.credentials.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends credentialsFindUniqueArgs>(args: SelectSubset<T, credentialsFindUniqueArgs<ExtArgs>>): Prisma__credentialsClient<$Result.GetResult<Prisma.$credentialsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Credentials that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {credentialsFindUniqueOrThrowArgs} args - Arguments to find a Credentials
     * @example
     * // Get one Credentials
     * const credentials = await prisma.credentials.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends credentialsFindUniqueOrThrowArgs>(args: SelectSubset<T, credentialsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__credentialsClient<$Result.GetResult<Prisma.$credentialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Credentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {credentialsFindFirstArgs} args - Arguments to find a Credentials
     * @example
     * // Get one Credentials
     * const credentials = await prisma.credentials.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends credentialsFindFirstArgs>(args?: SelectSubset<T, credentialsFindFirstArgs<ExtArgs>>): Prisma__credentialsClient<$Result.GetResult<Prisma.$credentialsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Credentials that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {credentialsFindFirstOrThrowArgs} args - Arguments to find a Credentials
     * @example
     * // Get one Credentials
     * const credentials = await prisma.credentials.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends credentialsFindFirstOrThrowArgs>(args?: SelectSubset<T, credentialsFindFirstOrThrowArgs<ExtArgs>>): Prisma__credentialsClient<$Result.GetResult<Prisma.$credentialsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Credentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {credentialsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Credentials
     * const credentials = await prisma.credentials.findMany()
     * 
     * // Get first 10 Credentials
     * const credentials = await prisma.credentials.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const credentialsWithIdOnly = await prisma.credentials.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends credentialsFindManyArgs>(args?: SelectSubset<T, credentialsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$credentialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Credentials.
     * @param {credentialsCreateArgs} args - Arguments to create a Credentials.
     * @example
     * // Create one Credentials
     * const Credentials = await prisma.credentials.create({
     *   data: {
     *     // ... data to create a Credentials
     *   }
     * })
     * 
     */
    create<T extends credentialsCreateArgs>(args: SelectSubset<T, credentialsCreateArgs<ExtArgs>>): Prisma__credentialsClient<$Result.GetResult<Prisma.$credentialsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Credentials.
     * @param {credentialsCreateManyArgs} args - Arguments to create many Credentials.
     * @example
     * // Create many Credentials
     * const credentials = await prisma.credentials.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends credentialsCreateManyArgs>(args?: SelectSubset<T, credentialsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Credentials and returns the data saved in the database.
     * @param {credentialsCreateManyAndReturnArgs} args - Arguments to create many Credentials.
     * @example
     * // Create many Credentials
     * const credentials = await prisma.credentials.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Credentials and only return the `id`
     * const credentialsWithIdOnly = await prisma.credentials.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends credentialsCreateManyAndReturnArgs>(args?: SelectSubset<T, credentialsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$credentialsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Credentials.
     * @param {credentialsDeleteArgs} args - Arguments to delete one Credentials.
     * @example
     * // Delete one Credentials
     * const Credentials = await prisma.credentials.delete({
     *   where: {
     *     // ... filter to delete one Credentials
     *   }
     * })
     * 
     */
    delete<T extends credentialsDeleteArgs>(args: SelectSubset<T, credentialsDeleteArgs<ExtArgs>>): Prisma__credentialsClient<$Result.GetResult<Prisma.$credentialsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Credentials.
     * @param {credentialsUpdateArgs} args - Arguments to update one Credentials.
     * @example
     * // Update one Credentials
     * const credentials = await prisma.credentials.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends credentialsUpdateArgs>(args: SelectSubset<T, credentialsUpdateArgs<ExtArgs>>): Prisma__credentialsClient<$Result.GetResult<Prisma.$credentialsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Credentials.
     * @param {credentialsDeleteManyArgs} args - Arguments to filter Credentials to delete.
     * @example
     * // Delete a few Credentials
     * const { count } = await prisma.credentials.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends credentialsDeleteManyArgs>(args?: SelectSubset<T, credentialsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {credentialsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Credentials
     * const credentials = await prisma.credentials.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends credentialsUpdateManyArgs>(args: SelectSubset<T, credentialsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Credentials and returns the data updated in the database.
     * @param {credentialsUpdateManyAndReturnArgs} args - Arguments to update many Credentials.
     * @example
     * // Update many Credentials
     * const credentials = await prisma.credentials.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Credentials and only return the `id`
     * const credentialsWithIdOnly = await prisma.credentials.updateManyAndReturn({
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
    updateManyAndReturn<T extends credentialsUpdateManyAndReturnArgs>(args: SelectSubset<T, credentialsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$credentialsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Credentials.
     * @param {credentialsUpsertArgs} args - Arguments to update or create a Credentials.
     * @example
     * // Update or create a Credentials
     * const credentials = await prisma.credentials.upsert({
     *   create: {
     *     // ... data to create a Credentials
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Credentials we want to update
     *   }
     * })
     */
    upsert<T extends credentialsUpsertArgs>(args: SelectSubset<T, credentialsUpsertArgs<ExtArgs>>): Prisma__credentialsClient<$Result.GetResult<Prisma.$credentialsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {credentialsCountArgs} args - Arguments to filter Credentials to count.
     * @example
     * // Count the number of Credentials
     * const count = await prisma.credentials.count({
     *   where: {
     *     // ... the filter for the Credentials we want to count
     *   }
     * })
    **/
    count<T extends credentialsCountArgs>(
      args?: Subset<T, credentialsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CredentialsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CredentialsAggregateArgs>(args: Subset<T, CredentialsAggregateArgs>): Prisma.PrismaPromise<GetCredentialsAggregateType<T>>

    /**
     * Group by Credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {credentialsGroupByArgs} args - Group by arguments.
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
      T extends credentialsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: credentialsGroupByArgs['orderBy'] }
        : { orderBy?: credentialsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, credentialsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCredentialsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the credentials model
   */
  readonly fields: credentialsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for credentials.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__credentialsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the credentials model
   */
  interface credentialsFieldRefs {
    readonly id: FieldRef<"credentials", 'String'>
    readonly url: FieldRef<"credentials", 'String'>
    readonly originUrl: FieldRef<"credentials", 'String'>
    readonly login: FieldRef<"credentials", 'String'>
    readonly password: FieldRef<"credentials", 'String'>
    readonly iv: FieldRef<"credentials", 'String'>
    readonly tag: FieldRef<"credentials", 'String'>
    readonly notes: FieldRef<"credentials", 'String'>
    readonly category: FieldRef<"credentials", 'String'>
    readonly createdAt: FieldRef<"credentials", 'DateTime'>
    readonly updatedAt: FieldRef<"credentials", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * credentials findUnique
   */
  export type credentialsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credentials
     */
    select?: credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the credentials
     */
    omit?: credentialsOmit<ExtArgs> | null
    /**
     * Filter, which credentials to fetch.
     */
    where: credentialsWhereUniqueInput
  }

  /**
   * credentials findUniqueOrThrow
   */
  export type credentialsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credentials
     */
    select?: credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the credentials
     */
    omit?: credentialsOmit<ExtArgs> | null
    /**
     * Filter, which credentials to fetch.
     */
    where: credentialsWhereUniqueInput
  }

  /**
   * credentials findFirst
   */
  export type credentialsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credentials
     */
    select?: credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the credentials
     */
    omit?: credentialsOmit<ExtArgs> | null
    /**
     * Filter, which credentials to fetch.
     */
    where?: credentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of credentials to fetch.
     */
    orderBy?: credentialsOrderByWithRelationInput | credentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for credentials.
     */
    cursor?: credentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of credentials.
     */
    distinct?: CredentialsScalarFieldEnum | CredentialsScalarFieldEnum[]
  }

  /**
   * credentials findFirstOrThrow
   */
  export type credentialsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credentials
     */
    select?: credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the credentials
     */
    omit?: credentialsOmit<ExtArgs> | null
    /**
     * Filter, which credentials to fetch.
     */
    where?: credentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of credentials to fetch.
     */
    orderBy?: credentialsOrderByWithRelationInput | credentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for credentials.
     */
    cursor?: credentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of credentials.
     */
    distinct?: CredentialsScalarFieldEnum | CredentialsScalarFieldEnum[]
  }

  /**
   * credentials findMany
   */
  export type credentialsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credentials
     */
    select?: credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the credentials
     */
    omit?: credentialsOmit<ExtArgs> | null
    /**
     * Filter, which credentials to fetch.
     */
    where?: credentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of credentials to fetch.
     */
    orderBy?: credentialsOrderByWithRelationInput | credentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing credentials.
     */
    cursor?: credentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` credentials.
     */
    skip?: number
    distinct?: CredentialsScalarFieldEnum | CredentialsScalarFieldEnum[]
  }

  /**
   * credentials create
   */
  export type credentialsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credentials
     */
    select?: credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the credentials
     */
    omit?: credentialsOmit<ExtArgs> | null
    /**
     * The data needed to create a credentials.
     */
    data?: XOR<credentialsCreateInput, credentialsUncheckedCreateInput>
  }

  /**
   * credentials createMany
   */
  export type credentialsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many credentials.
     */
    data: credentialsCreateManyInput | credentialsCreateManyInput[]
  }

  /**
   * credentials createManyAndReturn
   */
  export type credentialsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credentials
     */
    select?: credentialsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the credentials
     */
    omit?: credentialsOmit<ExtArgs> | null
    /**
     * The data used to create many credentials.
     */
    data: credentialsCreateManyInput | credentialsCreateManyInput[]
  }

  /**
   * credentials update
   */
  export type credentialsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credentials
     */
    select?: credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the credentials
     */
    omit?: credentialsOmit<ExtArgs> | null
    /**
     * The data needed to update a credentials.
     */
    data: XOR<credentialsUpdateInput, credentialsUncheckedUpdateInput>
    /**
     * Choose, which credentials to update.
     */
    where: credentialsWhereUniqueInput
  }

  /**
   * credentials updateMany
   */
  export type credentialsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update credentials.
     */
    data: XOR<credentialsUpdateManyMutationInput, credentialsUncheckedUpdateManyInput>
    /**
     * Filter which credentials to update
     */
    where?: credentialsWhereInput
    /**
     * Limit how many credentials to update.
     */
    limit?: number
  }

  /**
   * credentials updateManyAndReturn
   */
  export type credentialsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credentials
     */
    select?: credentialsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the credentials
     */
    omit?: credentialsOmit<ExtArgs> | null
    /**
     * The data used to update credentials.
     */
    data: XOR<credentialsUpdateManyMutationInput, credentialsUncheckedUpdateManyInput>
    /**
     * Filter which credentials to update
     */
    where?: credentialsWhereInput
    /**
     * Limit how many credentials to update.
     */
    limit?: number
  }

  /**
   * credentials upsert
   */
  export type credentialsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credentials
     */
    select?: credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the credentials
     */
    omit?: credentialsOmit<ExtArgs> | null
    /**
     * The filter to search for the credentials to update in case it exists.
     */
    where: credentialsWhereUniqueInput
    /**
     * In case the credentials found by the `where` argument doesn't exist, create a new credentials with this data.
     */
    create: XOR<credentialsCreateInput, credentialsUncheckedCreateInput>
    /**
     * In case the credentials was found with the provided `where` argument, update it with this data.
     */
    update: XOR<credentialsUpdateInput, credentialsUncheckedUpdateInput>
  }

  /**
   * credentials delete
   */
  export type credentialsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credentials
     */
    select?: credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the credentials
     */
    omit?: credentialsOmit<ExtArgs> | null
    /**
     * Filter which credentials to delete.
     */
    where: credentialsWhereUniqueInput
  }

  /**
   * credentials deleteMany
   */
  export type credentialsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which credentials to delete
     */
    where?: credentialsWhereInput
    /**
     * Limit how many credentials to delete.
     */
    limit?: number
  }

  /**
   * credentials without action
   */
  export type credentialsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credentials
     */
    select?: credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the credentials
     */
    omit?: credentialsOmit<ExtArgs> | null
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


  export const CredentialsScalarFieldEnum: {
    id: 'id',
    url: 'url',
    originUrl: 'originUrl',
    login: 'login',
    password: 'password',
    iv: 'iv',
    tag: 'tag',
    notes: 'notes',
    category: 'category',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CredentialsScalarFieldEnum = (typeof CredentialsScalarFieldEnum)[keyof typeof CredentialsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type authentificationWhereInput = {
    AND?: authentificationWhereInput | authentificationWhereInput[]
    OR?: authentificationWhereInput[]
    NOT?: authentificationWhereInput | authentificationWhereInput[]
    id?: StringFilter<"authentification"> | string
    password?: StringFilter<"authentification"> | string
    createdAt?: DateTimeFilter<"authentification"> | Date | string
    updatedAt?: DateTimeFilter<"authentification"> | Date | string
  }

  export type authentificationOrderByWithRelationInput = {
    id?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type authentificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: authentificationWhereInput | authentificationWhereInput[]
    OR?: authentificationWhereInput[]
    NOT?: authentificationWhereInput | authentificationWhereInput[]
    password?: StringFilter<"authentification"> | string
    createdAt?: DateTimeFilter<"authentification"> | Date | string
    updatedAt?: DateTimeFilter<"authentification"> | Date | string
  }, "id">

  export type authentificationOrderByWithAggregationInput = {
    id?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: authentificationCountOrderByAggregateInput
    _max?: authentificationMaxOrderByAggregateInput
    _min?: authentificationMinOrderByAggregateInput
  }

  export type authentificationScalarWhereWithAggregatesInput = {
    AND?: authentificationScalarWhereWithAggregatesInput | authentificationScalarWhereWithAggregatesInput[]
    OR?: authentificationScalarWhereWithAggregatesInput[]
    NOT?: authentificationScalarWhereWithAggregatesInput | authentificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"authentification"> | string
    password?: StringWithAggregatesFilter<"authentification"> | string
    createdAt?: DateTimeWithAggregatesFilter<"authentification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"authentification"> | Date | string
  }

  export type credentialsWhereInput = {
    AND?: credentialsWhereInput | credentialsWhereInput[]
    OR?: credentialsWhereInput[]
    NOT?: credentialsWhereInput | credentialsWhereInput[]
    id?: StringFilter<"credentials"> | string
    url?: StringFilter<"credentials"> | string
    originUrl?: StringFilter<"credentials"> | string
    login?: StringFilter<"credentials"> | string
    password?: StringFilter<"credentials"> | string
    iv?: StringFilter<"credentials"> | string
    tag?: StringFilter<"credentials"> | string
    notes?: StringFilter<"credentials"> | string
    category?: StringFilter<"credentials"> | string
    createdAt?: DateTimeFilter<"credentials"> | Date | string
    updatedAt?: DateTimeFilter<"credentials"> | Date | string
  }

  export type credentialsOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    originUrl?: SortOrder
    login?: SortOrder
    password?: SortOrder
    iv?: SortOrder
    tag?: SortOrder
    notes?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type credentialsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: credentialsWhereInput | credentialsWhereInput[]
    OR?: credentialsWhereInput[]
    NOT?: credentialsWhereInput | credentialsWhereInput[]
    url?: StringFilter<"credentials"> | string
    originUrl?: StringFilter<"credentials"> | string
    login?: StringFilter<"credentials"> | string
    password?: StringFilter<"credentials"> | string
    iv?: StringFilter<"credentials"> | string
    tag?: StringFilter<"credentials"> | string
    notes?: StringFilter<"credentials"> | string
    category?: StringFilter<"credentials"> | string
    createdAt?: DateTimeFilter<"credentials"> | Date | string
    updatedAt?: DateTimeFilter<"credentials"> | Date | string
  }, "id">

  export type credentialsOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    originUrl?: SortOrder
    login?: SortOrder
    password?: SortOrder
    iv?: SortOrder
    tag?: SortOrder
    notes?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: credentialsCountOrderByAggregateInput
    _max?: credentialsMaxOrderByAggregateInput
    _min?: credentialsMinOrderByAggregateInput
  }

  export type credentialsScalarWhereWithAggregatesInput = {
    AND?: credentialsScalarWhereWithAggregatesInput | credentialsScalarWhereWithAggregatesInput[]
    OR?: credentialsScalarWhereWithAggregatesInput[]
    NOT?: credentialsScalarWhereWithAggregatesInput | credentialsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"credentials"> | string
    url?: StringWithAggregatesFilter<"credentials"> | string
    originUrl?: StringWithAggregatesFilter<"credentials"> | string
    login?: StringWithAggregatesFilter<"credentials"> | string
    password?: StringWithAggregatesFilter<"credentials"> | string
    iv?: StringWithAggregatesFilter<"credentials"> | string
    tag?: StringWithAggregatesFilter<"credentials"> | string
    notes?: StringWithAggregatesFilter<"credentials"> | string
    category?: StringWithAggregatesFilter<"credentials"> | string
    createdAt?: DateTimeWithAggregatesFilter<"credentials"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"credentials"> | Date | string
  }

  export type authentificationCreateInput = {
    id?: string
    password?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type authentificationUncheckedCreateInput = {
    id?: string
    password?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type authentificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type authentificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type authentificationCreateManyInput = {
    id?: string
    password?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type authentificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type authentificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type credentialsCreateInput = {
    id?: string
    url?: string
    originUrl?: string
    login?: string
    password?: string
    iv?: string
    tag?: string
    notes?: string
    category?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type credentialsUncheckedCreateInput = {
    id?: string
    url?: string
    originUrl?: string
    login?: string
    password?: string
    iv?: string
    tag?: string
    notes?: string
    category?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type credentialsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    originUrl?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type credentialsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    originUrl?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type credentialsCreateManyInput = {
    id?: string
    url?: string
    originUrl?: string
    login?: string
    password?: string
    iv?: string
    tag?: string
    notes?: string
    category?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type credentialsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    originUrl?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type credentialsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    originUrl?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
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

  export type authentificationCountOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type authentificationMaxOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type authentificationMinOrderByAggregateInput = {
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

  export type credentialsCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    originUrl?: SortOrder
    login?: SortOrder
    password?: SortOrder
    iv?: SortOrder
    tag?: SortOrder
    notes?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type credentialsMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    originUrl?: SortOrder
    login?: SortOrder
    password?: SortOrder
    iv?: SortOrder
    tag?: SortOrder
    notes?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type credentialsMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    originUrl?: SortOrder
    login?: SortOrder
    password?: SortOrder
    iv?: SortOrder
    tag?: SortOrder
    notes?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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