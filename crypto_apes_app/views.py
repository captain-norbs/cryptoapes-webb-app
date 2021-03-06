from django.http import HttpResponse
from django.shortcuts import render
import sqlite3
from sqlite3 import Error
from django.conf import settings


def create_connection(db_file):
    """ create a database connection to the SQLite database
        specified by the db_file
    :param db_file: database file
    :return: Connection object or None
    """
    conn = None
    try:
        conn = sqlite3.connect(db_file)
    except Error as e:
        print(e)

    return conn

def select_all(conn):
    """
    Query all rows in the tasks table
    :param conn: the Connection object
    :return:
    """
    conn.row_factory = sqlite3.Row
    cur = conn.cursor()
    cur.execute("SELECT * FROM crypto_apes_app_cryptoape")

    rows = cur.fetchall()
    result = [dict(row) for row in rows]
    return result

    # for row in rows:
    #     print(row)

def index(request, path=""):
    conn = create_connection(settings.SQLITE_PATH)
    rows = select_all(conn)
    context = {"apes": rows}
    return render(request, 'crypto_apes_app/index.html', context)