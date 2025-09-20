
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
 * Model auth
 * 
 */
export type auth = $Result.DefaultSelection<Prisma.$authPayload>
/**
 * Model password
 * 
 */
export type password = $Result.DefaultSelection<Prisma.$passwordPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Auths
 * const auths = await prisma.auth.findMany()
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
   * // Fetch zero or more Auths
   * const auths = await prisma.auth.findMany()
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
   * `prisma.auth`: Exposes CRUD operations for the **auth** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auths
    * const auths = await prisma.auth.findMany()
    * ```
    */
  get auth(): Prisma.authDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.password`: Exposes CRUD operations for the **password** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Passwords
    * const passwords = await prisma.password.findMany()
    * ```
    */
  get password(): Prisma.passwordDelegate<ExtArgs, ClientOptions>;
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
    auth: 'auth',
    password: 'password'
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
      modelProps: "auth" | "password"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      auth: {
        payload: Prisma.$authPayload<ExtArgs>
        fields: Prisma.authFieldRefs
        operations: {
          findUnique: {
            args: Prisma.authFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.authFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authPayload>
          }
          findFirst: {
            args: Prisma.authFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.authFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authPayload>
          }
          findMany: {
            args: Prisma.authFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authPayload>[]
          }
          create: {
            args: Prisma.authCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authPayload>
          }
          createMany: {
            args: Prisma.authCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.authCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authPayload>[]
          }
          delete: {
            args: Prisma.authDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authPayload>
          }
          update: {
            args: Prisma.authUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authPayload>
          }
          deleteMany: {
            args: Prisma.authDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.authUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.authUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authPayload>[]
          }
          upsert: {
            args: Prisma.authUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authPayload>
          }
          aggregate: {
            args: Prisma.AuthAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuth>
          }
          groupBy: {
            args: Prisma.authGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthGroupByOutputType>[]
          }
          count: {
            args: Prisma.authCountArgs<ExtArgs>
            result: $Utils.Optional<AuthCountAggregateOutputType> | number
          }
        }
      }
      password: {
        payload: Prisma.$passwordPayload<ExtArgs>
        fields: Prisma.passwordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.passwordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.passwordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordPayload>
          }
          findFirst: {
            args: Prisma.passwordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.passwordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordPayload>
          }
          findMany: {
            args: Prisma.passwordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordPayload>[]
          }
          create: {
            args: Prisma.passwordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordPayload>
          }
          createMany: {
            args: Prisma.passwordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.passwordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordPayload>[]
          }
          delete: {
            args: Prisma.passwordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordPayload>
          }
          update: {
            args: Prisma.passwordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordPayload>
          }
          deleteMany: {
            args: Prisma.passwordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.passwordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.passwordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordPayload>[]
          }
          upsert: {
            args: Prisma.passwordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordPayload>
          }
          aggregate: {
            args: Prisma.PasswordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePassword>
          }
          groupBy: {
            args: Prisma.passwordGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordGroupByOutputType>[]
          }
          count: {
            args: Prisma.passwordCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordCountAggregateOutputType> | number
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
    auth?: authOmit
    password?: passwordOmit
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
   * Model auth
   */

  export type AggregateAuth = {
    _count: AuthCountAggregateOutputType | null
    _min: AuthMinAggregateOutputType | null
    _max: AuthMaxAggregateOutputType | null
  }

  export type AuthMinAggregateOutputType = {
    id: string | null
    password: string | null
    passPhrase: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthMaxAggregateOutputType = {
    id: string | null
    password: string | null
    passPhrase: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthCountAggregateOutputType = {
    id: number
    password: number
    passPhrase: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AuthMinAggregateInputType = {
    id?: true
    password?: true
    passPhrase?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthMaxAggregateInputType = {
    id?: true
    password?: true
    passPhrase?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthCountAggregateInputType = {
    id?: true
    password?: true
    passPhrase?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AuthAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auth to aggregate.
     */
    where?: authWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auths to fetch.
     */
    orderBy?: authOrderByWithRelationInput | authOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: authWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned auths
    **/
    _count?: true | AuthCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthMaxAggregateInputType
  }

  export type GetAuthAggregateType<T extends AuthAggregateArgs> = {
        [P in keyof T & keyof AggregateAuth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuth[P]>
      : GetScalarType<T[P], AggregateAuth[P]>
  }




  export type authGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authWhereInput
    orderBy?: authOrderByWithAggregationInput | authOrderByWithAggregationInput[]
    by: AuthScalarFieldEnum[] | AuthScalarFieldEnum
    having?: authScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthCountAggregateInputType | true
    _min?: AuthMinAggregateInputType
    _max?: AuthMaxAggregateInputType
  }

  export type AuthGroupByOutputType = {
    id: string
    password: string
    passPhrase: string
    createdAt: Date
    updatedAt: Date
    _count: AuthCountAggregateOutputType | null
    _min: AuthMinAggregateOutputType | null
    _max: AuthMaxAggregateOutputType | null
  }

  type GetAuthGroupByPayload<T extends authGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthGroupByOutputType[P]>
            : GetScalarType<T[P], AuthGroupByOutputType[P]>
        }
      >
    >


  export type authSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    password?: boolean
    passPhrase?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["auth"]>

  export type authSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    password?: boolean
    passPhrase?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["auth"]>

  export type authSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    password?: boolean
    passPhrase?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["auth"]>

  export type authSelectScalar = {
    id?: boolean
    password?: boolean
    passPhrase?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type authOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "password" | "passPhrase" | "createdAt" | "updatedAt", ExtArgs["result"]["auth"]>

  export type $authPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "auth"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      password: string
      passPhrase: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["auth"]>
    composites: {}
  }

  type authGetPayload<S extends boolean | null | undefined | authDefaultArgs> = $Result.GetResult<Prisma.$authPayload, S>

  type authCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<authFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthCountAggregateInputType | true
    }

  export interface authDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['auth'], meta: { name: 'auth' } }
    /**
     * Find zero or one Auth that matches the filter.
     * @param {authFindUniqueArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends authFindUniqueArgs>(args: SelectSubset<T, authFindUniqueArgs<ExtArgs>>): Prisma__authClient<$Result.GetResult<Prisma.$authPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Auth that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {authFindUniqueOrThrowArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends authFindUniqueOrThrowArgs>(args: SelectSubset<T, authFindUniqueOrThrowArgs<ExtArgs>>): Prisma__authClient<$Result.GetResult<Prisma.$authPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authFindFirstArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends authFindFirstArgs>(args?: SelectSubset<T, authFindFirstArgs<ExtArgs>>): Prisma__authClient<$Result.GetResult<Prisma.$authPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authFindFirstOrThrowArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends authFindFirstOrThrowArgs>(args?: SelectSubset<T, authFindFirstOrThrowArgs<ExtArgs>>): Prisma__authClient<$Result.GetResult<Prisma.$authPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Auths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auths
     * const auths = await prisma.auth.findMany()
     * 
     * // Get first 10 Auths
     * const auths = await prisma.auth.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authWithIdOnly = await prisma.auth.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends authFindManyArgs>(args?: SelectSubset<T, authFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Auth.
     * @param {authCreateArgs} args - Arguments to create a Auth.
     * @example
     * // Create one Auth
     * const Auth = await prisma.auth.create({
     *   data: {
     *     // ... data to create a Auth
     *   }
     * })
     * 
     */
    create<T extends authCreateArgs>(args: SelectSubset<T, authCreateArgs<ExtArgs>>): Prisma__authClient<$Result.GetResult<Prisma.$authPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Auths.
     * @param {authCreateManyArgs} args - Arguments to create many Auths.
     * @example
     * // Create many Auths
     * const auth = await prisma.auth.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends authCreateManyArgs>(args?: SelectSubset<T, authCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Auths and returns the data saved in the database.
     * @param {authCreateManyAndReturnArgs} args - Arguments to create many Auths.
     * @example
     * // Create many Auths
     * const auth = await prisma.auth.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Auths and only return the `id`
     * const authWithIdOnly = await prisma.auth.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends authCreateManyAndReturnArgs>(args?: SelectSubset<T, authCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Auth.
     * @param {authDeleteArgs} args - Arguments to delete one Auth.
     * @example
     * // Delete one Auth
     * const Auth = await prisma.auth.delete({
     *   where: {
     *     // ... filter to delete one Auth
     *   }
     * })
     * 
     */
    delete<T extends authDeleteArgs>(args: SelectSubset<T, authDeleteArgs<ExtArgs>>): Prisma__authClient<$Result.GetResult<Prisma.$authPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Auth.
     * @param {authUpdateArgs} args - Arguments to update one Auth.
     * @example
     * // Update one Auth
     * const auth = await prisma.auth.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends authUpdateArgs>(args: SelectSubset<T, authUpdateArgs<ExtArgs>>): Prisma__authClient<$Result.GetResult<Prisma.$authPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Auths.
     * @param {authDeleteManyArgs} args - Arguments to filter Auths to delete.
     * @example
     * // Delete a few Auths
     * const { count } = await prisma.auth.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends authDeleteManyArgs>(args?: SelectSubset<T, authDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auths
     * const auth = await prisma.auth.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends authUpdateManyArgs>(args: SelectSubset<T, authUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auths and returns the data updated in the database.
     * @param {authUpdateManyAndReturnArgs} args - Arguments to update many Auths.
     * @example
     * // Update many Auths
     * const auth = await prisma.auth.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Auths and only return the `id`
     * const authWithIdOnly = await prisma.auth.updateManyAndReturn({
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
    updateManyAndReturn<T extends authUpdateManyAndReturnArgs>(args: SelectSubset<T, authUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Auth.
     * @param {authUpsertArgs} args - Arguments to update or create a Auth.
     * @example
     * // Update or create a Auth
     * const auth = await prisma.auth.upsert({
     *   create: {
     *     // ... data to create a Auth
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auth we want to update
     *   }
     * })
     */
    upsert<T extends authUpsertArgs>(args: SelectSubset<T, authUpsertArgs<ExtArgs>>): Prisma__authClient<$Result.GetResult<Prisma.$authPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Auths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authCountArgs} args - Arguments to filter Auths to count.
     * @example
     * // Count the number of Auths
     * const count = await prisma.auth.count({
     *   where: {
     *     // ... the filter for the Auths we want to count
     *   }
     * })
    **/
    count<T extends authCountArgs>(
      args?: Subset<T, authCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthAggregateArgs>(args: Subset<T, AuthAggregateArgs>): Prisma.PrismaPromise<GetAuthAggregateType<T>>

    /**
     * Group by Auth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authGroupByArgs} args - Group by arguments.
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
      T extends authGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: authGroupByArgs['orderBy'] }
        : { orderBy?: authGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, authGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the auth model
   */
  readonly fields: authFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for auth.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__authClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the auth model
   */
  interface authFieldRefs {
    readonly id: FieldRef<"auth", 'String'>
    readonly password: FieldRef<"auth", 'String'>
    readonly passPhrase: FieldRef<"auth", 'String'>
    readonly createdAt: FieldRef<"auth", 'DateTime'>
    readonly updatedAt: FieldRef<"auth", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * auth findUnique
   */
  export type authFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth
     */
    select?: authSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth
     */
    omit?: authOmit<ExtArgs> | null
    /**
     * Filter, which auth to fetch.
     */
    where: authWhereUniqueInput
  }

  /**
   * auth findUniqueOrThrow
   */
  export type authFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth
     */
    select?: authSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth
     */
    omit?: authOmit<ExtArgs> | null
    /**
     * Filter, which auth to fetch.
     */
    where: authWhereUniqueInput
  }

  /**
   * auth findFirst
   */
  export type authFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth
     */
    select?: authSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth
     */
    omit?: authOmit<ExtArgs> | null
    /**
     * Filter, which auth to fetch.
     */
    where?: authWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auths to fetch.
     */
    orderBy?: authOrderByWithRelationInput | authOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auths.
     */
    cursor?: authWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auths.
     */
    distinct?: AuthScalarFieldEnum | AuthScalarFieldEnum[]
  }

  /**
   * auth findFirstOrThrow
   */
  export type authFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth
     */
    select?: authSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth
     */
    omit?: authOmit<ExtArgs> | null
    /**
     * Filter, which auth to fetch.
     */
    where?: authWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auths to fetch.
     */
    orderBy?: authOrderByWithRelationInput | authOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auths.
     */
    cursor?: authWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auths.
     */
    distinct?: AuthScalarFieldEnum | AuthScalarFieldEnum[]
  }

  /**
   * auth findMany
   */
  export type authFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth
     */
    select?: authSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth
     */
    omit?: authOmit<ExtArgs> | null
    /**
     * Filter, which auths to fetch.
     */
    where?: authWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auths to fetch.
     */
    orderBy?: authOrderByWithRelationInput | authOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing auths.
     */
    cursor?: authWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auths.
     */
    skip?: number
    distinct?: AuthScalarFieldEnum | AuthScalarFieldEnum[]
  }

  /**
   * auth create
   */
  export type authCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth
     */
    select?: authSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth
     */
    omit?: authOmit<ExtArgs> | null
    /**
     * The data needed to create a auth.
     */
    data?: XOR<authCreateInput, authUncheckedCreateInput>
  }

  /**
   * auth createMany
   */
  export type authCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many auths.
     */
    data: authCreateManyInput | authCreateManyInput[]
  }

  /**
   * auth createManyAndReturn
   */
  export type authCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth
     */
    select?: authSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the auth
     */
    omit?: authOmit<ExtArgs> | null
    /**
     * The data used to create many auths.
     */
    data: authCreateManyInput | authCreateManyInput[]
  }

  /**
   * auth update
   */
  export type authUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth
     */
    select?: authSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth
     */
    omit?: authOmit<ExtArgs> | null
    /**
     * The data needed to update a auth.
     */
    data: XOR<authUpdateInput, authUncheckedUpdateInput>
    /**
     * Choose, which auth to update.
     */
    where: authWhereUniqueInput
  }

  /**
   * auth updateMany
   */
  export type authUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update auths.
     */
    data: XOR<authUpdateManyMutationInput, authUncheckedUpdateManyInput>
    /**
     * Filter which auths to update
     */
    where?: authWhereInput
    /**
     * Limit how many auths to update.
     */
    limit?: number
  }

  /**
   * auth updateManyAndReturn
   */
  export type authUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth
     */
    select?: authSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the auth
     */
    omit?: authOmit<ExtArgs> | null
    /**
     * The data used to update auths.
     */
    data: XOR<authUpdateManyMutationInput, authUncheckedUpdateManyInput>
    /**
     * Filter which auths to update
     */
    where?: authWhereInput
    /**
     * Limit how many auths to update.
     */
    limit?: number
  }

  /**
   * auth upsert
   */
  export type authUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth
     */
    select?: authSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth
     */
    omit?: authOmit<ExtArgs> | null
    /**
     * The filter to search for the auth to update in case it exists.
     */
    where: authWhereUniqueInput
    /**
     * In case the auth found by the `where` argument doesn't exist, create a new auth with this data.
     */
    create: XOR<authCreateInput, authUncheckedCreateInput>
    /**
     * In case the auth was found with the provided `where` argument, update it with this data.
     */
    update: XOR<authUpdateInput, authUncheckedUpdateInput>
  }

  /**
   * auth delete
   */
  export type authDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth
     */
    select?: authSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth
     */
    omit?: authOmit<ExtArgs> | null
    /**
     * Filter which auth to delete.
     */
    where: authWhereUniqueInput
  }

  /**
   * auth deleteMany
   */
  export type authDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auths to delete
     */
    where?: authWhereInput
    /**
     * Limit how many auths to delete.
     */
    limit?: number
  }

  /**
   * auth without action
   */
  export type authDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth
     */
    select?: authSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth
     */
    omit?: authOmit<ExtArgs> | null
  }


  /**
   * Model password
   */

  export type AggregatePassword = {
    _count: PasswordCountAggregateOutputType | null
    _min: PasswordMinAggregateOutputType | null
    _max: PasswordMaxAggregateOutputType | null
  }

  export type PasswordMinAggregateOutputType = {
    id: string | null
    url: string | null
    originUrl: string | null
    password: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PasswordMaxAggregateOutputType = {
    id: string | null
    url: string | null
    originUrl: string | null
    password: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PasswordCountAggregateOutputType = {
    id: number
    url: number
    originUrl: number
    password: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PasswordMinAggregateInputType = {
    id?: true
    url?: true
    originUrl?: true
    password?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PasswordMaxAggregateInputType = {
    id?: true
    url?: true
    originUrl?: true
    password?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PasswordCountAggregateInputType = {
    id?: true
    url?: true
    originUrl?: true
    password?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PasswordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which password to aggregate.
     */
    where?: passwordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of passwords to fetch.
     */
    orderBy?: passwordOrderByWithRelationInput | passwordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: passwordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` passwords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` passwords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned passwords
    **/
    _count?: true | PasswordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordMaxAggregateInputType
  }

  export type GetPasswordAggregateType<T extends PasswordAggregateArgs> = {
        [P in keyof T & keyof AggregatePassword]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePassword[P]>
      : GetScalarType<T[P], AggregatePassword[P]>
  }




  export type passwordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: passwordWhereInput
    orderBy?: passwordOrderByWithAggregationInput | passwordOrderByWithAggregationInput[]
    by: PasswordScalarFieldEnum[] | PasswordScalarFieldEnum
    having?: passwordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordCountAggregateInputType | true
    _min?: PasswordMinAggregateInputType
    _max?: PasswordMaxAggregateInputType
  }

  export type PasswordGroupByOutputType = {
    id: string
    url: string
    originUrl: string
    password: string
    notes: string
    createdAt: Date
    updatedAt: Date
    _count: PasswordCountAggregateOutputType | null
    _min: PasswordMinAggregateOutputType | null
    _max: PasswordMaxAggregateOutputType | null
  }

  type GetPasswordGroupByPayload<T extends passwordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordGroupByOutputType[P]>
        }
      >
    >


  export type passwordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    originUrl?: boolean
    password?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["password"]>

  export type passwordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    originUrl?: boolean
    password?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["password"]>

  export type passwordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    originUrl?: boolean
    password?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["password"]>

  export type passwordSelectScalar = {
    id?: boolean
    url?: boolean
    originUrl?: boolean
    password?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type passwordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "originUrl" | "password" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["password"]>

  export type $passwordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "password"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      originUrl: string
      password: string
      notes: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["password"]>
    composites: {}
  }

  type passwordGetPayload<S extends boolean | null | undefined | passwordDefaultArgs> = $Result.GetResult<Prisma.$passwordPayload, S>

  type passwordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<passwordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordCountAggregateInputType | true
    }

  export interface passwordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['password'], meta: { name: 'password' } }
    /**
     * Find zero or one Password that matches the filter.
     * @param {passwordFindUniqueArgs} args - Arguments to find a Password
     * @example
     * // Get one Password
     * const password = await prisma.password.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends passwordFindUniqueArgs>(args: SelectSubset<T, passwordFindUniqueArgs<ExtArgs>>): Prisma__passwordClient<$Result.GetResult<Prisma.$passwordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Password that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {passwordFindUniqueOrThrowArgs} args - Arguments to find a Password
     * @example
     * // Get one Password
     * const password = await prisma.password.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends passwordFindUniqueOrThrowArgs>(args: SelectSubset<T, passwordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__passwordClient<$Result.GetResult<Prisma.$passwordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Password that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passwordFindFirstArgs} args - Arguments to find a Password
     * @example
     * // Get one Password
     * const password = await prisma.password.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends passwordFindFirstArgs>(args?: SelectSubset<T, passwordFindFirstArgs<ExtArgs>>): Prisma__passwordClient<$Result.GetResult<Prisma.$passwordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Password that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passwordFindFirstOrThrowArgs} args - Arguments to find a Password
     * @example
     * // Get one Password
     * const password = await prisma.password.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends passwordFindFirstOrThrowArgs>(args?: SelectSubset<T, passwordFindFirstOrThrowArgs<ExtArgs>>): Prisma__passwordClient<$Result.GetResult<Prisma.$passwordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Passwords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passwordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Passwords
     * const passwords = await prisma.password.findMany()
     * 
     * // Get first 10 Passwords
     * const passwords = await prisma.password.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordWithIdOnly = await prisma.password.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends passwordFindManyArgs>(args?: SelectSubset<T, passwordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$passwordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Password.
     * @param {passwordCreateArgs} args - Arguments to create a Password.
     * @example
     * // Create one Password
     * const Password = await prisma.password.create({
     *   data: {
     *     // ... data to create a Password
     *   }
     * })
     * 
     */
    create<T extends passwordCreateArgs>(args: SelectSubset<T, passwordCreateArgs<ExtArgs>>): Prisma__passwordClient<$Result.GetResult<Prisma.$passwordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Passwords.
     * @param {passwordCreateManyArgs} args - Arguments to create many Passwords.
     * @example
     * // Create many Passwords
     * const password = await prisma.password.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends passwordCreateManyArgs>(args?: SelectSubset<T, passwordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Passwords and returns the data saved in the database.
     * @param {passwordCreateManyAndReturnArgs} args - Arguments to create many Passwords.
     * @example
     * // Create many Passwords
     * const password = await prisma.password.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Passwords and only return the `id`
     * const passwordWithIdOnly = await prisma.password.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends passwordCreateManyAndReturnArgs>(args?: SelectSubset<T, passwordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$passwordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Password.
     * @param {passwordDeleteArgs} args - Arguments to delete one Password.
     * @example
     * // Delete one Password
     * const Password = await prisma.password.delete({
     *   where: {
     *     // ... filter to delete one Password
     *   }
     * })
     * 
     */
    delete<T extends passwordDeleteArgs>(args: SelectSubset<T, passwordDeleteArgs<ExtArgs>>): Prisma__passwordClient<$Result.GetResult<Prisma.$passwordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Password.
     * @param {passwordUpdateArgs} args - Arguments to update one Password.
     * @example
     * // Update one Password
     * const password = await prisma.password.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends passwordUpdateArgs>(args: SelectSubset<T, passwordUpdateArgs<ExtArgs>>): Prisma__passwordClient<$Result.GetResult<Prisma.$passwordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Passwords.
     * @param {passwordDeleteManyArgs} args - Arguments to filter Passwords to delete.
     * @example
     * // Delete a few Passwords
     * const { count } = await prisma.password.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends passwordDeleteManyArgs>(args?: SelectSubset<T, passwordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passwords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passwordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Passwords
     * const password = await prisma.password.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends passwordUpdateManyArgs>(args: SelectSubset<T, passwordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passwords and returns the data updated in the database.
     * @param {passwordUpdateManyAndReturnArgs} args - Arguments to update many Passwords.
     * @example
     * // Update many Passwords
     * const password = await prisma.password.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Passwords and only return the `id`
     * const passwordWithIdOnly = await prisma.password.updateManyAndReturn({
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
    updateManyAndReturn<T extends passwordUpdateManyAndReturnArgs>(args: SelectSubset<T, passwordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$passwordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Password.
     * @param {passwordUpsertArgs} args - Arguments to update or create a Password.
     * @example
     * // Update or create a Password
     * const password = await prisma.password.upsert({
     *   create: {
     *     // ... data to create a Password
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Password we want to update
     *   }
     * })
     */
    upsert<T extends passwordUpsertArgs>(args: SelectSubset<T, passwordUpsertArgs<ExtArgs>>): Prisma__passwordClient<$Result.GetResult<Prisma.$passwordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Passwords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passwordCountArgs} args - Arguments to filter Passwords to count.
     * @example
     * // Count the number of Passwords
     * const count = await prisma.password.count({
     *   where: {
     *     // ... the filter for the Passwords we want to count
     *   }
     * })
    **/
    count<T extends passwordCountArgs>(
      args?: Subset<T, passwordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Password.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PasswordAggregateArgs>(args: Subset<T, PasswordAggregateArgs>): Prisma.PrismaPromise<GetPasswordAggregateType<T>>

    /**
     * Group by Password.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passwordGroupByArgs} args - Group by arguments.
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
      T extends passwordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: passwordGroupByArgs['orderBy'] }
        : { orderBy?: passwordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, passwordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the password model
   */
  readonly fields: passwordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for password.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__passwordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the password model
   */
  interface passwordFieldRefs {
    readonly id: FieldRef<"password", 'String'>
    readonly url: FieldRef<"password", 'String'>
    readonly originUrl: FieldRef<"password", 'String'>
    readonly password: FieldRef<"password", 'String'>
    readonly notes: FieldRef<"password", 'String'>
    readonly createdAt: FieldRef<"password", 'DateTime'>
    readonly updatedAt: FieldRef<"password", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * password findUnique
   */
  export type passwordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password
     */
    select?: passwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password
     */
    omit?: passwordOmit<ExtArgs> | null
    /**
     * Filter, which password to fetch.
     */
    where: passwordWhereUniqueInput
  }

  /**
   * password findUniqueOrThrow
   */
  export type passwordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password
     */
    select?: passwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password
     */
    omit?: passwordOmit<ExtArgs> | null
    /**
     * Filter, which password to fetch.
     */
    where: passwordWhereUniqueInput
  }

  /**
   * password findFirst
   */
  export type passwordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password
     */
    select?: passwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password
     */
    omit?: passwordOmit<ExtArgs> | null
    /**
     * Filter, which password to fetch.
     */
    where?: passwordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of passwords to fetch.
     */
    orderBy?: passwordOrderByWithRelationInput | passwordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for passwords.
     */
    cursor?: passwordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` passwords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` passwords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of passwords.
     */
    distinct?: PasswordScalarFieldEnum | PasswordScalarFieldEnum[]
  }

  /**
   * password findFirstOrThrow
   */
  export type passwordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password
     */
    select?: passwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password
     */
    omit?: passwordOmit<ExtArgs> | null
    /**
     * Filter, which password to fetch.
     */
    where?: passwordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of passwords to fetch.
     */
    orderBy?: passwordOrderByWithRelationInput | passwordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for passwords.
     */
    cursor?: passwordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` passwords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` passwords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of passwords.
     */
    distinct?: PasswordScalarFieldEnum | PasswordScalarFieldEnum[]
  }

  /**
   * password findMany
   */
  export type passwordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password
     */
    select?: passwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password
     */
    omit?: passwordOmit<ExtArgs> | null
    /**
     * Filter, which passwords to fetch.
     */
    where?: passwordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of passwords to fetch.
     */
    orderBy?: passwordOrderByWithRelationInput | passwordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing passwords.
     */
    cursor?: passwordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` passwords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` passwords.
     */
    skip?: number
    distinct?: PasswordScalarFieldEnum | PasswordScalarFieldEnum[]
  }

  /**
   * password create
   */
  export type passwordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password
     */
    select?: passwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password
     */
    omit?: passwordOmit<ExtArgs> | null
    /**
     * The data needed to create a password.
     */
    data?: XOR<passwordCreateInput, passwordUncheckedCreateInput>
  }

  /**
   * password createMany
   */
  export type passwordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many passwords.
     */
    data: passwordCreateManyInput | passwordCreateManyInput[]
  }

  /**
   * password createManyAndReturn
   */
  export type passwordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password
     */
    select?: passwordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the password
     */
    omit?: passwordOmit<ExtArgs> | null
    /**
     * The data used to create many passwords.
     */
    data: passwordCreateManyInput | passwordCreateManyInput[]
  }

  /**
   * password update
   */
  export type passwordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password
     */
    select?: passwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password
     */
    omit?: passwordOmit<ExtArgs> | null
    /**
     * The data needed to update a password.
     */
    data: XOR<passwordUpdateInput, passwordUncheckedUpdateInput>
    /**
     * Choose, which password to update.
     */
    where: passwordWhereUniqueInput
  }

  /**
   * password updateMany
   */
  export type passwordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update passwords.
     */
    data: XOR<passwordUpdateManyMutationInput, passwordUncheckedUpdateManyInput>
    /**
     * Filter which passwords to update
     */
    where?: passwordWhereInput
    /**
     * Limit how many passwords to update.
     */
    limit?: number
  }

  /**
   * password updateManyAndReturn
   */
  export type passwordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password
     */
    select?: passwordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the password
     */
    omit?: passwordOmit<ExtArgs> | null
    /**
     * The data used to update passwords.
     */
    data: XOR<passwordUpdateManyMutationInput, passwordUncheckedUpdateManyInput>
    /**
     * Filter which passwords to update
     */
    where?: passwordWhereInput
    /**
     * Limit how many passwords to update.
     */
    limit?: number
  }

  /**
   * password upsert
   */
  export type passwordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password
     */
    select?: passwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password
     */
    omit?: passwordOmit<ExtArgs> | null
    /**
     * The filter to search for the password to update in case it exists.
     */
    where: passwordWhereUniqueInput
    /**
     * In case the password found by the `where` argument doesn't exist, create a new password with this data.
     */
    create: XOR<passwordCreateInput, passwordUncheckedCreateInput>
    /**
     * In case the password was found with the provided `where` argument, update it with this data.
     */
    update: XOR<passwordUpdateInput, passwordUncheckedUpdateInput>
  }

  /**
   * password delete
   */
  export type passwordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password
     */
    select?: passwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password
     */
    omit?: passwordOmit<ExtArgs> | null
    /**
     * Filter which password to delete.
     */
    where: passwordWhereUniqueInput
  }

  /**
   * password deleteMany
   */
  export type passwordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which passwords to delete
     */
    where?: passwordWhereInput
    /**
     * Limit how many passwords to delete.
     */
    limit?: number
  }

  /**
   * password without action
   */
  export type passwordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password
     */
    select?: passwordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password
     */
    omit?: passwordOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AuthScalarFieldEnum: {
    id: 'id',
    password: 'password',
    passPhrase: 'passPhrase',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AuthScalarFieldEnum = (typeof AuthScalarFieldEnum)[keyof typeof AuthScalarFieldEnum]


  export const PasswordScalarFieldEnum: {
    id: 'id',
    url: 'url',
    originUrl: 'originUrl',
    password: 'password',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PasswordScalarFieldEnum = (typeof PasswordScalarFieldEnum)[keyof typeof PasswordScalarFieldEnum]


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


  export type authWhereInput = {
    AND?: authWhereInput | authWhereInput[]
    OR?: authWhereInput[]
    NOT?: authWhereInput | authWhereInput[]
    id?: StringFilter<"auth"> | string
    password?: StringFilter<"auth"> | string
    passPhrase?: StringFilter<"auth"> | string
    createdAt?: DateTimeFilter<"auth"> | Date | string
    updatedAt?: DateTimeFilter<"auth"> | Date | string
  }

  export type authOrderByWithRelationInput = {
    id?: SortOrder
    password?: SortOrder
    passPhrase?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type authWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: authWhereInput | authWhereInput[]
    OR?: authWhereInput[]
    NOT?: authWhereInput | authWhereInput[]
    password?: StringFilter<"auth"> | string
    passPhrase?: StringFilter<"auth"> | string
    createdAt?: DateTimeFilter<"auth"> | Date | string
    updatedAt?: DateTimeFilter<"auth"> | Date | string
  }, "id">

  export type authOrderByWithAggregationInput = {
    id?: SortOrder
    password?: SortOrder
    passPhrase?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: authCountOrderByAggregateInput
    _max?: authMaxOrderByAggregateInput
    _min?: authMinOrderByAggregateInput
  }

  export type authScalarWhereWithAggregatesInput = {
    AND?: authScalarWhereWithAggregatesInput | authScalarWhereWithAggregatesInput[]
    OR?: authScalarWhereWithAggregatesInput[]
    NOT?: authScalarWhereWithAggregatesInput | authScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"auth"> | string
    password?: StringWithAggregatesFilter<"auth"> | string
    passPhrase?: StringWithAggregatesFilter<"auth"> | string
    createdAt?: DateTimeWithAggregatesFilter<"auth"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"auth"> | Date | string
  }

  export type passwordWhereInput = {
    AND?: passwordWhereInput | passwordWhereInput[]
    OR?: passwordWhereInput[]
    NOT?: passwordWhereInput | passwordWhereInput[]
    id?: StringFilter<"password"> | string
    url?: StringFilter<"password"> | string
    originUrl?: StringFilter<"password"> | string
    password?: StringFilter<"password"> | string
    notes?: StringFilter<"password"> | string
    createdAt?: DateTimeFilter<"password"> | Date | string
    updatedAt?: DateTimeFilter<"password"> | Date | string
  }

  export type passwordOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    originUrl?: SortOrder
    password?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type passwordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: passwordWhereInput | passwordWhereInput[]
    OR?: passwordWhereInput[]
    NOT?: passwordWhereInput | passwordWhereInput[]
    url?: StringFilter<"password"> | string
    originUrl?: StringFilter<"password"> | string
    password?: StringFilter<"password"> | string
    notes?: StringFilter<"password"> | string
    createdAt?: DateTimeFilter<"password"> | Date | string
    updatedAt?: DateTimeFilter<"password"> | Date | string
  }, "id">

  export type passwordOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    originUrl?: SortOrder
    password?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: passwordCountOrderByAggregateInput
    _max?: passwordMaxOrderByAggregateInput
    _min?: passwordMinOrderByAggregateInput
  }

  export type passwordScalarWhereWithAggregatesInput = {
    AND?: passwordScalarWhereWithAggregatesInput | passwordScalarWhereWithAggregatesInput[]
    OR?: passwordScalarWhereWithAggregatesInput[]
    NOT?: passwordScalarWhereWithAggregatesInput | passwordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"password"> | string
    url?: StringWithAggregatesFilter<"password"> | string
    originUrl?: StringWithAggregatesFilter<"password"> | string
    password?: StringWithAggregatesFilter<"password"> | string
    notes?: StringWithAggregatesFilter<"password"> | string
    createdAt?: DateTimeWithAggregatesFilter<"password"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"password"> | Date | string
  }

  export type authCreateInput = {
    id?: string
    password?: string
    passPhrase?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type authUncheckedCreateInput = {
    id?: string
    password?: string
    passPhrase?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type authUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    passPhrase?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type authUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    passPhrase?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type authCreateManyInput = {
    id?: string
    password?: string
    passPhrase?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type authUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    passPhrase?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type authUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    passPhrase?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type passwordCreateInput = {
    id?: string
    url?: string
    originUrl?: string
    password?: string
    notes?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type passwordUncheckedCreateInput = {
    id?: string
    url?: string
    originUrl?: string
    password?: string
    notes?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type passwordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    originUrl?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type passwordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    originUrl?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type passwordCreateManyInput = {
    id?: string
    url?: string
    originUrl?: string
    password?: string
    notes?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type passwordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    originUrl?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type passwordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    originUrl?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
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

  export type authCountOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
    passPhrase?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type authMaxOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
    passPhrase?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type authMinOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
    passPhrase?: SortOrder
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

  export type passwordCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    originUrl?: SortOrder
    password?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type passwordMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    originUrl?: SortOrder
    password?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type passwordMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    originUrl?: SortOrder
    password?: SortOrder
    notes?: SortOrder
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