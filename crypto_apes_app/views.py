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
    cur = conn.cursor()
    cur.execute("SELECT * FROM crypto_apes_app_cryptoape")

    rows = cur.fetchall()
    return rows

    # for row in rows:
    #     print(row)

def index(request, path=""):
    conn = create_connection(settings.SQLITE_PATH)
    rows = select_all(conn)
    print(rows[0])
    context = {"apes": rows}
    return render(request, 'crypto_apes_app/index.html', context)